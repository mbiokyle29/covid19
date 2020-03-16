import { useEffect, useRef } from "react";
import dynamic from 'next/dynamic'


export default function index() {
  const ref = useRef(null);
  useEffect(() => {
    var options = {
      reference: {
          id: "NC_045512.2",
          name: "SARS-CoV-2",
          fastaURL: "./igv/ref/NC_045512.2.fa",
          indexURL: "./igv/ref/NC_045512.2.fa.fai",
      }
    };
    import('igv').then((igv) => igv.createBrowser(ref.current, options).then(function (browser) {
      console.log("Created IGV browser");
  }))
  }, [ref.current])
  return (
    <article>
      <h1>COVID19 - IGV</h1>
      <div ref={ref}></div>
    </article>
  )
}