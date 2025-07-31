import React, { useState } from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './index.module.css';

function HomepageHeader() {
    return (
        <header className={styles.heroBanner}>
            <div className="container">
                <h1 className="hero__title">Kho tài nguyên - TruongIT.NET</h1>
                <p className="hero__subtitle">Tổng hợp công cụ và tài liệu làm việc.</p>
            </div>
        </header>
    );
}

// Cấu trúc cây thư mục của bạn
const directoryTree = {
    name: 'TruongIT.NET',
    type: 'root',
    children: [
        {
            name: 'Microsoft Office',
            type: 'folder',
            path: '/docs/category/microsoft-office',
            children: [
                {
                    name: 'Office 2016',
                    type: 'folder',
                    path: '/docs/Microsoft-Office/office-2016',
                    children: [
                        { name: 'Office 2016.exe', type: 'external-file', path: 'https://itculi-my.sharepoint.com/:u:/g/personal/download_truongit_net/ET2p-5ZSwOVAj1etM2goYIMBGpVWNwwg8UoFPLjkMXWJ3A?download=1' },
                    ]
                },
                { name: 'Office 2019', type: 'file', path: '/docs/Microsoft-Office/office-2019' },
            ],
        },
        {
            name: 'Tools',
            type: 'folder',
            path: '/docs/category/tools',
            children: [
                {
                    name: 'Anydesk',
                    type: 'folder',
                    path: '/docs/Tools/Anydesk',
                    children: [
                        { name: 'AnydeskSetup.exe', type: 'external-file', path: 'https://itculi-my.sharepoint.com/:u:/g/personal/download_truongit_net/ET2p-5ZSwOVAj1etM2goYIMBGpVWNwwg8UoFPLjkMXWJ3A?download=1' },
                    ]
                },
                { name: 'Partition Tool', type: 'file', path: '/docs/Tools/partition-tool' },
            ],
        },
        {
            name: 'Windows ISO',
            type: 'folder',
            path: '/docs/category/windows-iso',
            children: [
                { name: 'Windows 10.iso', type: 'file', path: '/docs/Windows/windows-10' },
                { name: 'Windows 11.iso', type: 'file', path: '/docs/Windows/windows-11' },
            ],
        },
    ],
};

// Component để render cây thư mục với hiệu ứng
function DirectoryNode({ node, defaultOpen = true }) {
    const [isOpen, setIsOpen] = useState(defaultOpen);
    const isFolder = node.type === 'folder';
    const isFile = node.type === 'file';
    const isExternalFile = node.type === 'external-file';

    const handleToggle = () => {
        if (isFolder) {
            setIsOpen(!isOpen);
        }
    };

    const content = (
        <>
            {node.name}
        </>
    );

    return (
        <li className={isFolder && isOpen ? 'isOpen' : ''}>
            {isFile ? (
                <Link to={node.path}>{content}</Link>
            ) : isExternalFile ? (
                <a href={node.path} target="_blank" rel="noopener noreferrer">{content}</a>
            ) : (
                <span onClick={handleToggle} className="folder-name">{content}</span>
            )}

            {isFolder && node.children && (
                <ul className="collapsible">
                    {isOpen && node.children.map((child, index) => (
                        <DirectoryNode key={index} node={child} />
                    ))}
                </ul>
            )}
        </li>
    );
}

export default function Home() {
    return (
        <Layout
            title={`Trang chủ`}
            description="Kho tài nguyên chia sẻ bởi TruongIT.NET">
            <HomepageHeader />
            <main>
                <div className="directoryContainer">
                    {/* Cột 1 */}
                    <div className="directoryColumn">
                        <ul className="directoryTree">
                            {directoryTree.children.slice(0, 2).map((node, index) => (
                                <DirectoryNode key={index} node={node} defaultOpen={true} />
                            ))}
                        </ul>
                    </div>

                    {/* Cột 2 */}
                    <div className="directoryColumn">
                        <ul className="directoryTree">
                            {directoryTree.children.slice(2).map((node, index) => (
                                <DirectoryNode key={index} node={node} defaultOpen={true} />
                            ))}
                        </ul>
                    </div>
                </div>
            </main>
        </Layout>
    );
}