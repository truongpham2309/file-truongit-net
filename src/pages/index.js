import React, { useState } from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './index.module.css';
import LinkModal from '@site/src/components/LinkModal';

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

// Cấu trúc dữ liệu đã được đơn giản hóa
const tabData = [
    {
        name: 'SOFTWARE',
        items: [
            {
                name: 'Google Chrome', children: [
                    { name: 'Google Chrome x86', link: 'https://itculi-my.sharepoint.com/:u:/g/personal/admin_truongit_net/EQMlPl_70zxIimn_OuadiGQBiaTy9yoeA5N8867HpuDllA?download=1' },
                    { name: 'Google Chrome x64', link: '/docs/software/google-chrome/x64' },
                ]
            },
            {
                name: 'Cốc Cốc', children: [
                    { name: 'Cốc Cốc x86', link: '/docs/software/coc-coc/x86' },
                    { name: 'Cốc Cốc x64', link: '/docs/software/coc-coc/x64' },
                ]
            },
            {
                name: 'WinRAR', children: [
                    { name: 'WinRAR x86', link: '/docs/software/winrar/x86' },
                    { name: 'WinRAR x64', link: '/docs/software/winrar/x64' },
                ]
            },
            {
                name: '7-Zip', children: [
                    { name: '7-Zip x86', link: '/docs/software/7-zip/x86' },
                    { name: '7-Zip x64', link: '/docs/software/7-zip/x64' },
                ]
            },
            {
                name: 'Unikey', children: [
                    { name: 'Unikey x86', link: '/docs/software/unikey/x86' },
                    { name: 'Unikey x64', link: '/docs/software/unikey/x64' },
                ]
            },
            { name: 'Onekey Ghost', link: 'https://itculi-my.sharepoint.com/:u:/g/personal/admin_truongit_net/EQMlPl_70zxIimn_OuadiGQBiaTy9yoeA5N8867HpuDllA?download=1' },
            { name: 'Zalo', link: '/docs/software/zalo' },
            { name: 'Foxit Reader', link: '/docs/software/foxit-reader' },
            { name: 'Foxit Editor', link: '/docs/software/foxit-editor' },
            { name: 'AnyDesk', link: '/docs/software/anydesk' },
            { name: 'UltraViewer', link: '/docs/software/ultraviewer' },
            {
                name: 'TeamViewer', children: [
                    { name: 'TeamViewer x86', link: '/docs/software/teamviewer/x86' },
                    { name: 'TeamViewer x64', link: '/docs/software/teamviewer/x64' },
                ]
            },
            {
                name: 'VNC Server', children: [
                    { name: 'VNC Server x86', link: '/docs/software/vnc-server/x86' },
                    { name: 'VNC Server x64', link: '/docs/software/vnc-server/x64' },
                ]
            },
            {
                name: 'VNC Viewer', children: [
                    { name: 'VNC Viewer x86', link: '/docs/software/vnc-viewer/x86' },
                    { name: 'VNC Viewer x64', link: '/docs/software/vnc-viewer/x64' },
                ]
            },
            {
                name: 'VLC Player', children: [
                    { name: 'VLC Media Player x86', link: '/docs/software/vlc/x86' },
                    { name: 'VLC Media Player x64', link: '/docs/software/vlc/x64' },
                ]
            },
            {
                name: 'Notepad++', children: [
                    { name: 'Notepad++ x86', link: '/docs/software/notepad-plus-plus/x86' },
                    { name: 'Notepad++ x64', link: '/docs/software/notepad-plus-plus/x64' },
                ]
            },
            { name: '.NET AIO', link: '/docs/software/dotnet-framework-aio' },
            { name: 'Audacity', link: '/docs/software/audacity' },
            { name: 'OBS Studio', link: '/docs/software/obs-studio' },
            { name: 'Visual C++ AIO', link: '/docs/software/visual-cpp-aio' },
            { name: 'HiBit Uninstaller', link: '/docs/software/hibit-uninstaller' },
            { name: 'Fonts Unicode-VNI', link: '/docs/software/fonts-unicode-vni' },
            {
                name: 'Zoom', children: [
                    { name: 'Zoom x86', link: '/docs/software/zoom/x86' },
                    { name: 'Zoom x64', link: '/docs/software/zoom/x64' },
                ]
            },
            { name: 'UltraISO', link: '/docs/software/ultra-iso' },
            { name: 'CCleaner', link: '/docs/software/ccleaner' },
            { name: 'IDM', link: '/docs/software/idm' },
            { name: 'FastStone Capture', link: '/docs/software/faststone-capture' },
        ],
    },
    {
        name: 'TOOLS',
        items: [
            { name: 'MS Activation', link: '/docs/tools/microsoft-activation-scripts' },
            {
                name: '3DP Chip', children: [
                    { name: '3DP Chip', link: '/docs/tools/3dp-chip/main' },
                    { name: '3DP Chip Net', link: '/docs/tools/3dp-chip/net' },
                ]
            },
            {
                name: 'Easy Driver Win7', children: [
                    { name: 'Easy Driver Windows 7 x86', link: '/docs/tools/easy-driver-win7/x86' },
                    { name: 'Easy Driver Windows 7 x64', link: '/docs/tools/easy-driver-win7/x64' },
                ]
            },
            {
                name: 'Easy Driver Win10', children: [
                    { name: 'Easy Driver Windows 10 x86', link: '/docs/tools/easy-driver-win10/x86' },
                    { name: 'Easy Driver Windows 10 x64', link: '/docs/tools/easy-driver-win10/x64' },
                ]
            },
            { name: 'Update Blocker', link: '/docs/tools/update-blocker' },
            { name: 'Defender Blocker', link: '/docs/tools/defender-blocker' },
            { name: 'TreeSize', link: '/docs/tools/treesize' },
            { name: 'Dism++', link: '/docs/tools/dism-plus-plus' },
            { name: 'HWMonitor', link: '/docs/tools/hwmonitor' },
            { name: 'HWinFO', link: '/docs/tools/hwinfo' },
            { name: 'Crystal DiskInfo', link: '/docs/tools/crystal-disk-info' },
            { name: 'Crystal DiskMark', link: '/docs/tools/crystal-disk-mark' },
            { name: 'Hard Disk Sentinel', link: '/docs/tools/hard-disk-sentinel' },
            { name: 'True Image', link: '/docs/tools/true-image' },
            { name: 'Partition Wizard', link: '/docs/tools/partition-wizard' },
            { name: 'Bootice', link: '/docs/tools/bootice' },
            { name: 'GPU-Z', link: '/docs/tools/gpu-z' },
            { name: 'CPU-Z', link: '/docs/tools/cpu-z' },
            { name: 'AdwCleaner', link: '/docs/tools/adwcleaner' },
            { name: 'TeraCopy Pro', link: '/docs/tools/teracopy-pro' },
            { name: 'Rufus', link: '/docs/tools/rufus' },
            { name: 'TempCleaner', link: '/docs/tools/temp-cleaner' },
        ],
    },
    {
        name: 'OFFICE',
        layout: 'groupedGrid', 
        groups: [
            {
                title: 'Office 2024',
                items: [
                    { name: 'Office 2024 Pro', link: '/docs/office/2024/professional' },
                    { name: 'Office 2024 Pro Plus', link: '/docs/office/2024/professional-plus' },
                    { name: 'Project 2024 Pro', link: '/docs/office/2024/project' },
                    { name: 'Visio 2024 Pro', link: '/docs/office/2024/visio' },
                ],
            },
            {
                title: 'Office 2021',
                items: [
                    { name: 'Office 2021 Pro', link: '/docs/office/2021/professional' },
                    { name: 'Office 2021 Pro Plus', link: '/docs/office/2021/professional-plus' },
                    { name: 'Project 2021 Pro', link: '/docs/office/2021/project' },
                    { name: 'Visio 2021 Pro', link: '/docs/office/2021/visio' },
                ],
            },
            {
                title: 'Office 2019',
                items: [
                    { name: 'Office 2019 Pro', link: '/docs/office/2019/professional' },
                    { name: 'Office 2019 Pro Plus', link: '/docs/office/2019/professional-plus' },
                    { name: 'Project 2019 Pro', link: '/docs/office/2019/project' },
                    { name: 'Visio 2019 Pro', link: '/docs/office/2019/visio' },
                ],
            },
            {
                title: 'Office 2016',
                items: [
                    { name: 'Office 2016 Pro', link: '/docs/office/2016/professional' },
                    { name: 'Office 2016 Pro Plus', link: '/docs/office/2016/professional-plus' },
                    { name: 'Project 2016 Pro', link: '/docs/office/2016/project' },
                    { name: 'Visio 2016 Pro', link: '/docs/office/2016/visio' },
                ],
            },
            {
                title: 'Office 2013',
                items: [
                    { name: 'Office 2013 Pro', link: '/docs/office/2013/professional' },
                    { name: 'Office 2013 Pro Plus', link: '/docs/office/2013/professional-plus' },
                    { name: 'Project 2013 Pro', link: '/docs/office/2013/project' },
                    { name: 'Visio 2013 Pro', link: '/docs/office/2013/visio' },
                ],
            },
            {
                title: 'Office 2010',
                items: [
                    { name: 'Office 2010 Pro', link: '/docs/office/2010/professional' },
                    { name: 'Office 2010 Pro Plus', link: '/docs/office/2010/professional-plus' },
                    { name: 'Project 2010 Pro', link: '/docs/office/2010/project' },
                    { name: 'Visio 2010 Pro', link: '/docs/office/2010/visio' },
                ],
            },
        ],
    },
    {
        name: 'WINDOWS',
        items: [
            {
                name: 'Windows 11', children: [
                    { name: 'Windows 11 24H2 x64', link: '/docs/windows/11/24h2-x64' },
                    { name: 'Windows 11 23H2 (Old) x64', link: '/docs/windows/11/23h2-old-x64' },
                ]
            },
            {
                name: 'Windows 10', children: [
                    { name: 'Windows 10 Build - 19045.6093 (July 2025) x86', link: '/docs/windows/10/july-2025-x86' },
                    { name: 'Windows 10 Build - 19045.6093 (July 2025) x64', link: '/docs/windows/10/july-2025-x64' },
                ]
            },
            {
                name: 'Windows 8.1', children: [
                    { name: 'Windows 8.1 Pro Build - 9600.17415 x86', link: '/docs/windows/8.1/pro-x86' },
                    { name: 'Windows 8.1 Pro Build - 9600.17415 x64', link: '/docs/windows/8.1/pro-x64' },
                ]
            },
            {
                name: 'Windows 7', children: [
                    { name: 'Windows 7 Ultimate SP1 x86', link: '/docs/windows/7/ultimate-sp1-x86' },
                    { name: 'Windows 7 Ultimate SP1 x64', link: '/docs/windows/7/ultimate-sp1-x64' },
                    { name: 'Windows 7 Enterprise SP1 x86', link: '/docs/windows/7/enterprise-sp1-x86' },
                    { name: 'Windows 7 Enterprise SP1 x64', link: '/docs/windows/7/enterprise-sp1-x64' },
                    { name: 'Windows 7 Professional SP1 x86', link: '/docs/windows/7/professional-sp1-x86' },
                    { name: 'Windows 7 Professional SP1 x64', link: '/docs/windows/7/professional-sp1-x64' },
                ]
            },
        ],
    },
    {
        name: 'PRINTER',
        items: [
            {
                name: 'Fix Printer', icon: 'printer', children: [
                    { name: 'Fix 0x0000709', link: '/docs/printer/fix/709' },
                    { name: 'Fix 0x000011b', link: '/docs/printer/fix/11b' },
                    { name: 'Fix Error', link: '/docs/printer/fix/error' },
                    { name: 'Fix Error Canon 2900, 3300', link: '/docs/printer/fix/canon-2900-3300' },
                    { name: 'Fix PrintSpooler', link: '/docs/printer/fix/printspooler' },
                ]
            },
            {
                name: 'Driver Printer', icon: 'printer', children: [
                    { name: 'Brother 2366DW', link: '/docs/printer/driver/brother-2366dw' },
                    { name: 'Brother HL-B2000D', link: '/docs/printer/driver/brother-hl-b2000d' },
                    { name: 'Canon G2010', link: '/docs/printer/driver/canon-g2010' },
                    { name: 'Canon LBP7018C', link: '/docs/printer/driver/canon-lbp7018c' },
                    { name: 'Canon LBP6030', link: '/docs/printer/driver/canon-lbp6030' },
                    { name: 'Epson TM-T81', link: '/docs/printer/driver/epson-tm-t81' },
                    { name: 'Epson T82II EWM', link: '/docs/printer/driver/epson-t82ii-ewm' },
                ]
            },
        ],
    },
    {
        name: 'BVXA',
        items: [
            { name: 'HisPro 2.367.0', link: '/'},
            { name: 'Webcam Captrue', link: '/'},
            { name: 'ITSupport Widget', link: '/'},
            {
                name: 'Fix Printer', icon: 'printer', children: [
                    { name: 'Fix 0x0000709', link: '/docs/printer/fix/709' },
                    { name: 'Fix 0x000011b', link: '/docs/printer/fix/11b' },
                    { name: 'Fix Error', link: '/docs/printer/fix/error' },
                    { name: 'Fix Error Canon 2900, 3300', link: '/docs/printer/fix/canon-2900-3300' },
                    { name: 'Fix PrintSpooler', link: '/docs/printer/fix/printspooler' },
                ]
            },
            {
                name: 'Driver Printer', icon: 'printer', children: [
                    { name: 'Brother 2366DW', link: '/docs/printer/driver/brother-2366dw' },
                    { name: 'Brother HL-B2000D', link: '/docs/printer/driver/brother-hl-b2000d' },
                    { name: 'Canon G2010', link: '/docs/printer/driver/canon-g2010' },
                    { name: 'Canon LBP7018C', link: '/docs/printer/driver/canon-lbp7018c' },
                    { name: 'Canon LBP6030', link: '/docs/printer/driver/canon-lbp6030' },
                    { name: 'Epson TM-T81', link: '/docs/printer/driver/epson-tm-t81' },
                    { name: 'Epson T82II EWM', link: '/docs/printer/driver/epson-t82ii-ewm' },
                ]
            },
        ],
    },
];

// Hàm để lấy emoji dựa trên loại icon
function getIconForItem(iconType) {
    switch (iconType) {
        case 'printer':
            return '🖨️'; // Giữ nguyên icon cho Printer
        default:
            return '📦'; // Mặc định là icon hộp cho tất cả các loại khác
    }
}

// Component cho mỗi nút bấm trong Grid
function GridButton({ name, link, icon, children, onButtonClick, categoryName }) {
    const hasSubItems = children && children.length > 0;
    const isExternal = link && (link.startsWith('http') || link.startsWith('https'));

    const content = (
        <>
            <span className="item-icon">{getIconForItem(icon, categoryName)}</span>
            <span>{name}</span>
        </>
    );

    if (hasSubItems) {
        return (
            <button onClick={() => onButtonClick({ title: name, links: children })} className="gridButton">
                {content}
            </button>
        );
    }

    if (isExternal) {
        return (
            <button onClick={() => { window.location.href = link; }} className="gridButton">
                {content}
            </button>
        );
    }

    return (
        <Link to={link} className="gridButton">
            {content}
        </Link>
    );
}

export default function Home() {
    const [activeTab, setActiveTab] = useState(tabData[0].name);
    const [modalContent, setModalContent] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const activeCategory = tabData.find(cat => cat.name === activeTab);

    const handleButtonClick = (content) => {
        setModalContent(content);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setModalContent(null);
    };

    return (
        <Layout
            title={`Trang chủ`}
            description="Kho tài nguyên chia sẻ bởi TruongIT.NET">
            <HomepageHeader />
            <main>
                <div className="tabsContainer">
                    <div className="tabsNav">
                        {tabData.map(category => (
                            <button
                                key={category.name}
                                className={`tabButton ${activeTab === category.name ? 'active' : ''}`}
                                onClick={() => setActiveTab(category.name)}
                            >
                                {category.name}
                            </button>
                        ))}
                    </div>

                    <div className="tabContent">
                        {/* --- LOGIC HIỂN THỊ MỚI --- */}
                        {activeCategory && activeCategory.layout === 'groupedGrid' ? (
                            // Giao diện nhóm cho tab Office
                            <div className="groupedGridContainer">
                                {activeCategory.groups.map(group => (
                                    <div key={group.title} className="itemGroup">
                                        <h3 className="groupTitle">{group.title}</h3>
                                        <div className="gridContainer">
                                            {group.items.map((item, index) => (
                                                <GridButton key={index} {...item} categoryName={activeCategory.name} onButtonClick={handleButtonClick} />
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            // Giao diện lưới thông thường cho các tab khác
                            <div className="gridContainer">
                                {activeCategory && activeCategory.items.map((item, index) => (
                                    <GridButton key={index} {...item} categoryName={activeCategory.name} onButtonClick={handleButtonClick} />
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </main>
            {isModalOpen && <LinkModal title={modalContent.title} links={modalContent.links} onClose={closeModal} />}
        </Layout>
    );
}
