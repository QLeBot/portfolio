'use client'

import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';

// Initialize PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = new URL('pdfjs-dist/build/pdf.worker.min.mjs', import.meta.url).toString();
//pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;


function Resume() {

    const [numPages, setNumPages] = useState<number>();
    const [pageNumber, setPageNumber] = useState<number>(1);
    function onLoadSuccess({ numPages }: { numPages: number }) : void {
        setNumPages(numPages);
    }

    return (
        <div className='flex flex-col items-center justify-center h-screen'>
            <Document file='path/to/your/pdf/file.pdf' onLoadSuccess={onLoadSuccess}>
                <Page pageNumber={pageNumber} />
            </Document>
        </div>
    );
}

export default Resume;