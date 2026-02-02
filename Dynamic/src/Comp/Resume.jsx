import React, { useEffect } from 'react';
import { HiDownload } from 'react-icons/hi';
import resumePDF from '../assets/AKHIL_Resume_AMD_SDE1.pdf';
import { getCalApi } from "@calcom/embed-react";

function Resume() {
    // Initialize Cal.com
    useEffect(() => {
        (async function () {
            const cal = await getCalApi({ "namespace": "15min" });
            cal("ui", { "styles": { "branding": { "brandColor": "#ff5252" } }, "hideEventTypeDetails": false, "layout": "month_view" });
        })();
    }, []);

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = resumePDF;
        link.download = 'Akhil_Tuluri_Resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="resume-container">
            <div className="resume-header">
                <h1>Akhil's Resume</h1>
                <div className="resume-actions">
                    <button
                        data-cal-namespace="15min"
                        data-cal-link="akhiltuluri"
                        data-cal-config='{"layout":"month_view"}'
                        className="hire-me-btn"
                    >
                        Hire Me
                    </button>
                    <button onClick={handleDownload} className="download-icon-btn" title="Download Resume">
                        <HiDownload />
                    </button>
                </div>
            </div>

            <div className="resume-viewer">
                <iframe
                    src={resumePDF}
                    title="Akhil Tuluri Resume"
                    className="pdf-iframe"
                />
            </div>
        </div>
    );
}

export default Resume;
