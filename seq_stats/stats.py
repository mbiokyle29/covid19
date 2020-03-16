# file: stats.py
import argparse

from Bio import SeqIO
from Bio.SeqUtils import GC_skew
from wiggelen import write


def get_fasta(file):
    with open(file, "r") as fh:
        return next(SeqIO.parse(fh, "fasta"))


def compute_gc(fasta, window):
    return GC_skew(fasta.seq, window=window)


def main():

    parser = argparse.ArgumentParser(description="sequence stats from a fasta")
    parser.add_argument(
        "fasta_file",
        help="Path to fasta file",
    )
    parser.add_argument(
        "--bin-size",
        default=5,
        type=int,
        help="Sliding window size",
    )

    args = parser.parse_args()
    fasta = get_fasta(args.fasta_file)
    gc = compute_gc(fasta, window=args.bin_size)

    with open(f"./{fasta.id}.gc.wig", "w") as fh:
        write(
            ((fasta.id, idx * 5, value) for idx, value in enumerate(gc)),
            fh,
            name=f"GC",
            description=f"GC percentage in a {args.bin_size}bp sliding window (from {fasta.id})"
        )


if __name__ == '__main__':
    main()
