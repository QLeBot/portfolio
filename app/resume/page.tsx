"use client"

import React from 'react';
import NavBar from '../components/nav-bar';
import Footer from '../components/nav-footer';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

// Initialize PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const Resume = () => {
    const [language, setLanguage] = React.useState<'english' | 'french'>('english');
    const [numPages, setNumPages] = React.useState<number>(0);

    // Update these paths to your actual PDF files
    const pdfFiles = {
        english: './CV/CV_2024_CH_EN_Most_Recent.pdf',
        french: './CV/CV_2024_CH_FR_Most_Recent.pdf'
    };

    function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
        setNumPages(numPages);
    }

    return (
        <div className="w-full flex flex-col min-h-screen bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-slate-900 via-slate-800 to-slate-700">
            <NavBar />
            <div className="flex flex-col items-center gap-4 p-4">
                <div className="flex gap-4 mb-4">
                    <button
                        className={`px-4 py-2 rounded ${language === 'english' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                        onClick={() => setLanguage('english')}
                    >
                        English
                    </button>
                    <button
                        className={`px-4 py-2 rounded ${language === 'french' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                        onClick={() => setLanguage('french')}
                    >
                        Français
                    </button>
                </div>

                <div className="max-w-4xl w-full">
                    <Document file={pdfFiles[language]} onLoadSuccess={onDocumentLoadSuccess} className="border rounded shadow-lg">
                        {Array.from(new Array(numPages), (el, index) => (
                            <Page
                                key={`page_${index + 1}`}
                                pageNumber={index + 1}
                                width={Math.min(window.innerWidth - 32, 1000)}
                                renderTextLayer={true}
                                renderAnnotationLayer={true}
                            />
                        ))}
                    </Document>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Resume;