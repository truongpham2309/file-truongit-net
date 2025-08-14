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

// Cấu trúc dữ liệu đã được cập nhật
const tabData = [
  {
    name: 'SOFTWARE',
    items: [
      { name: 'Google Chrome', children: [
          { name: 'Google Chrome 138.0.7204.184 - 32 bit', link: 'https://dl.google.com/release2/chrome/adpanowgeooql6x3z5aebmcvhlha_138.0.7204.184/138.0.7204.184_chrome_installer_uncompressed.exe' },
          { name: 'Google Chrome 138.0.7204.184 - 64 bit', link: 'https://dl.google.com/release2/chrome/h5cbgnnhhw2lr35rflchltnqcm_138.0.7204.184/138.0.7204.184_chrome_installer_uncompressed.exe' },
      ]},
      { name: 'Cốc Cốc', children: [
          { name: 'Cốc Cốc 123.0.168 (VietNam)', link: 'https://files.coccoc.com/browser/coccoc_standalone_vi.exe' },
          { name: 'Cốc Cốc 123.0.168 (English)', link: 'https://files.coccoc.com/browser/coccoc_standalone_en.exe' },
      ]},
      { name: 'WinRAR', children: [
          { name: 'WinRAR 7.13 (English)', link: 'https://itculi-my.sharepoint.com/:u:/g/personal/download_truongit_net/EcM4QWsScP1Du7sSwCyV4zQBsvJvTQKiYWKzEaCoelkZWQ?download=1' },
          { name: 'WinRAR 7.13 (Vietnamese)', link: 'https://itculi-my.sharepoint.com/:u:/g/personal/download_truongit_net/EYxx3TfOxS9JjoYLdVGifUABZ5BmsdxMklPiKSgVJtNS7g?download=1' },
      ]},
      { name: '7-Zip', children: [
          { name: '7-Zip 25.00 - 32 bit', link: 'https://www.7-zip.org/a/7z2500-x64.exe' },
          { name: '7-Zip 25.00 - 64 bit', link: 'https://www.7-zip.org/a/7z2500.exe' },
      ]},
      { name: 'Unikey', children: [
          { name: 'UniKey 4.6 RC2 - 32 bit', link: 'https://www.unikey.org/assets/release/unikey46RC2-230919-win32.zip' },
          { name: 'UniKey 4.6 RC2 - 64 bit', link: 'https://www.unikey.org/assets/release/unikey46RC2-230919-win64.zip' },
      ]},
      { name: 'Onekey Ghost', children: [
          { name: 'Onekey Ghost V14.5.8.215', link: 'https://itculi-my.sharepoint.com/:u:/g/personal/download_truongit_net/Ee5bRgrNx_hAv9eTyfxzT3gB2hSaNM8Cz0xDpohyjXqk1Q?download=1' },
      ]},
      { name: 'Zalo', link: 'https://zalo.me/download/zalo-pc?utm=90000' },
      { name: 'Foxit Reader', children: [
          { name: 'Foxit PDF Reader 2025.1.0.27973', link: 'https://cdn78.foxitsoftware.com/product/reader/desktop/win/2025.1.0/FoxitPDFReader20251_L10N_Setup_Prom.exe' },
      ]},
      { name: 'Foxit Editor', children: [
          { name: 'Foxit PDF Editor Pro 2025.1.0.27937 Multilingual', link: 'https://itculi-my.sharepoint.com/:u:/g/personal/download_truongit_net/EaYAovmgZAFBsZhtnK2HGD8BoKSWvl-LUsx-uhUq4EEVJg?download=1' },
      ]},
      { name: 'Anydesk', children: [
          { name: 'Anydesk 6.0.8', link: 'https://itculi-my.sharepoint.com/:u:/g/personal/download_truongit_net/EVVujXsSRHdBhI_VnmUE8ywBHHjLT1dHxGrUJjk2YHTtPA?download=1' },
      ]},
      { name: 'UltraViewer', children: [
          { name: 'UltraViewer 6.6.124', link: 'https://ultraviewer.net/en/UltraViewer_setup_6.6_en.exe' },
      ]},      
      { name: 'TeamViewer', children: [
          { name: 'TeamViewer 15.68.5', link: 'https://dl.teamviewer.com/download/version_15x/TeamViewer_Setup.exe' },
          { name: 'TeamViewer Portable', link: 'https://dl.teamviewer.com/download/TeamViewerPortable.zip' },
      ]},
      { name: 'VNC Server', children: [
          { name: 'VNC Server Enterprise 6.9.1', link: 'https://itculi-my.sharepoint.com/:u:/g/personal/download_truongit_net/EZmaTQaRbJBJlJVItXTPoDEBi7BvfXYWnPKavmWfo_tyew?download=1' },
      ]},
      { name: 'VNC Viewer', children: [
          { name: 'VNC Viewer 7.13.1', link: 'https://downloads.realvnc.com/download/file/viewer.files/VNC-Viewer-7.13.1-Windows.exe' },
      ]},
      { name: 'VLC Player', children: [
          { name: 'VLC Media Player 3.0.21 - 32 bit', link: 'https://downloads.videolan.org/pub/videolan/vlc/3.0.21/win32/vlc-3.0.21-win32.exe' },
          { name: 'VLC Media Player 3.0.21 - 64 bit', link: 'https://downloads.videolan.org/pub/videolan/vlc/3.0.21/win64/vlc-3.0.21-win64.exe' },
      ]},
      { name: 'Notepad++', children: [
          { name: 'Notepad++ 8.8.3 - 32 bit', link: 'https://github.com/notepad-plus-plus/notepad-plus-plus/releases/download/v8.8.3/npp.8.8.3.Installer.exe' },
          { name: 'Notepad++ 8.8.3 - 64 bit', link: 'https://github.com/notepad-plus-plus/notepad-plus-plus/releases/download/v8.8.3/npp.8.8.3.Installer.x64.exe' },
      ]},
      { name: '.NET AIO 1.1 - 9.0.1', link: 'https://itculi-my.sharepoint.com/:u:/g/personal/download_truongit_net/Edq0i-Yl-OBImG1BeaPag_kB6-9BmxpsXG20Q_eVmMZoKQ?download=1' },
      { name: 'Audacity', children: [
          { name: 'Audacity 3.7.4 - 32 bit', link: 'https://github.com/audacity/audacity/releases/download/Audacity-3.7.4/audacity-win-3.7.4-32bit.exe' },
          { name: 'Audacity 3.7.4 - 64 bit', link: 'https://github.com/audacity/audacity/releases/download/Audacity-3.7.4/audacity-win-3.7.4-64bit.exe' },
      ]},
      { name: 'OBS Studio', children: [
          { name: 'OBS Studio 31.1.2', link: 'https://github.com/obsproject/obs-studio/releases/download/31.1.2/OBS-Studio-31.1.2-Windows-x64-Installer.exe' },
          { name: 'OBS Studio Portable', link: 'https://github.com/obsproject/obs-studio/releases/download/31.1.2/OBS-Studio-31.1.2-Windows-x64.zip' },
      ]},
      { name: 'Visual C++ AIO', link: 'https://itculi-my.sharepoint.com/:u:/g/personal/download_truongit_net/Edq0i-Yl-OBImG1BeaPag_kB6-9BmxpsXG20Q_eVmMZoKQ?download=1' },
      { name: 'HiBit Uninstaller', children: [
          { name: 'HiBit Uninstaller 3.2.55', link: 'https://www.hibitsoft.ir/HiBitUninstaller/HiBitUninstaller-setup-3.2.55.exe' },
          { name: 'HiBit Uninstaller Portable', link: 'https://www.hibitsoft.ir/HiBitUninstaller/HiBitUninstaller-Portable-3.2.55.zip' },
      ]},
      { name: 'Fonts Unicode-VNI', link: 'https://itculi-my.sharepoint.com/:u:/g/personal/download_truongit_net/Ecn9H8gwY2VHr1d2YWYDaDUBaqUrg7UedrU2St7GW8MZMw?download=1' },
      { name: 'Zoom', children: [
          { name: 'Zoom 6.4.6.64360', link: 'https://zoom.us/client/latest/ZoomInstaller.exe' },
      ]},
      { name: 'UltraISO', children: [
          { name: 'UltraISO Premium Edition 9.7.6.3860', link: 'https://itculi-my.sharepoint.com/:u:/g/personal/download_truongit_net/EdrCQNmlRp1NownY-MzCK7IB8VLw2ks29PS5yHb_qogcGw?download=1' },
      ]},
      { name: 'CCleaner', children: [
          { name: 'Professional Portable v5.84.9126', link: 'https://itculi-my.sharepoint.com/:u:/g/personal/download_truongit_net/ETxWoso985dGrQRASjqtlFQB1zB7zP8eCQUlKrJbHVAsBQ?download=1' },
      ]},
      { name: 'IDM', children: [
          { name: 'IDM', link: '/' },
      ]},
      { name: 'FastStone Capture', children: [
          { name: 'FastStone Capture 11.0', link: '/' },
      ]},
    ],
  },
  {
    name: 'TOOLS',
    items: [
      { name: 'MS Activation', link: 'https://itculi-my.sharepoint.com/:u:/g/personal/admin_truongit_net/EfTNbpk5sjxOrN7e7a-bC6wBKsAUq7UutSRD0xnbQCfHKQ?download=1' },
      { name: '3DP Chip', children: [
          { name: '3DP Chip', link: 'https://www.3dpchip.com/new/3DP_Chip_v2507.exe' },
          { name: '3DP Chip Net', link: 'https://www.3dpchip.com/new/3DP_Net_v2101.exe' },
          { name: '3DP Cleaner', link: 'https://driver3.3dpchip.com/3DP_Cleaner_v1412.exe' },
      ]},
      { name: 'Easy Driver Win7', children: [
          { name: 'Easy Driver Windows 7 x86', link: '/docs/tools/easy-driver-win7/x86' },
          { name: 'Easy Driver Windows 7 x64', link: '/docs/tools/easy-driver-win7/x64' },
      ]},
      { name: 'Easy Driver Win10', children: [
          { name: 'Easy Driver Windows 10 x86', link: '/docs/tools/easy-driver-win10/x86' },
          { name: 'Easy Driver Windows 10 x64', link: '/docs/tools/easy-driver-win10/x64' },
      ]},
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
      { name: 'Reset Trail Anydesk', link: '/docs/tools/temp-cleaner' },
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
      { name: 'Windows 11', children: [
          { name: 'Windows 11 24H2 x64', link: '/docs/windows/11/24h2-x64' },
          { name: 'Windows 11 23H2 (Old) x64', link: '/docs/windows/11/23h2-old-x64' },
      ]},
      { name: 'Windows 10', children: [
          { name: 'Windows 10 Build - 19045.6093 (July 2025) x86', link: '/docs/windows/10/july-2025-x86' },
          { name: 'Windows 10 Build - 19045.6093 (July 2025) x64', link: '/docs/windows/10/july-2025-x64' },
      ]},
      { name: 'Windows 8.1', children: [
          { name: 'Windows 8.1 Pro Build - 9600.17415 x86', link: '/docs/windows/8.1/pro-x86' },
          { name: 'Windows 8.1 Pro Build - 9600.17415 x64', link: '/docs/windows/8.1/pro-x64' },
      ]},
      { name: 'Windows 7', children: [
          { name: 'Windows 7 Ultimate SP1 x86', link: '/docs/windows/7/ultimate-sp1-x86' },
          { name: 'Windows 7 Ultimate SP1 x64', link: '/docs/windows/7/ultimate-sp1-x64' },
          { name: 'Windows 7 Enterprise SP1 x86', link: '/docs/windows/7/enterprise-sp1-x86' },
          { name: 'Windows 7 Enterprise SP1 x64', link: '/docs/windows/7/enterprise-sp1-x64' },
          { name: 'Windows 7 Professional SP1 x86', link: '/docs/windows/7/professional-sp1-x86' },
          { name: 'Windows 7 Professional SP1 x64', link: '/docs/windows/7/professional-sp1-x64' },
      ]},
    ],
  },
  {
    name: 'PRINTER',
    items: [
      { name: 'Fix Printer', icon: 'printer', children: [
          { name: 'Fix 0x0000709', link: '/docs/printer/fix/709' },
          { name: 'Fix 0x000011b', link: '/docs/printer/fix/11b' },
          { name: 'Fix Error', link: '/docs/printer/fix/error' },
          { name: 'Fix Error Canon 2900, 3300', link: '/docs/printer/fix/canon-2900-3300' },
          { name: 'Fix PrintSpooler', link: '/docs/printer/fix/printspooler' },
      ]},
      { name: 'Driver Printer', icon: 'printer', children: [
          { name: 'Brother 2366DW', link: '/docs/printer/driver/brother-2366dw' },
          { name: 'Brother HL-B2000D', link: '/docs/printer/driver/brother-hl-b2000d' },
          { name: 'Canon G2010', link: '/docs/printer/driver/canon-g2010' },
          { name: 'Canon LBP7018C', link: '/docs/printer/driver/canon-lbp7018c' },
          { name: 'Canon LBP6030', link: '/docs/printer/driver/canon-lbp6030' },
          { name: 'Epson TM-T81', link: '/docs/printer/driver/epson-tm-t81' },
          { name: 'Epson T82II EWM', link: '/docs/printer/driver/epson-t82ii-ewm' },
      ]},
    ],
  },
  {
    name: 'BVXA',
    items: [
      { name: 'HisPro Củ Chi', children: [
          { name: 'HisPro 2.367.0', link: 'https://itculi-my.sharepoint.com/:u:/g/personal/download_truongit_net/EUxkquymfoxJuL7MChck3_sBI6ssjX3yFnqgstMpTTod2Q?download=1' },
      ]},
      { name: 'HisPro Tây Ninh', children: [
          { name: 'HisPro 2.369.0', link: 'https://itculi-my.sharepoint.com/:u:/g/personal/download_truongit_net/EYU5UnSDO5FAkC_QjvOMtZYBvBKgwOGOZSt1sBTYJiYWBg?download=1' },
      ]},
      { name: 'VPN các chi nhánh', children: [
          { name: 'VPN Xuyên Á Củ Chi', link: '/' },
          { name: 'VPN Xuyên Á Vĩnh Long', link: '/' },
          { name: 'VPN Xuyên Á Tây Ninh', link: '/' },
          { name: 'VPN Xuyên Á Long An', link: '/' },
      ]},
      { name: 'Webcam Captrue', link: 'https://itculi-my.sharepoint.com/:u:/g/personal/download_truongit_net/EVYv4MT2qgpJrAr87Qka4qoB8o7S0lBBJCBaAwDotyHg_A?download=1'},
      { name: 'ITSupport Widget', link: 'https://itculi-my.sharepoint.com/:u:/g/personal/download_truongit_net/Ed-wzMCkjJpAlQtC0jHdPX4BXiBhaO4P4kIbBb2Tn2Dzfw?download=1'},
      { name: 'VNC Server BVXA', link: 'https://itculi-my.sharepoint.com/:u:/g/personal/download_truongit_net/EZPyQFmO6khJr4gtjbe6QRYBwS_1ay2lKiZmwrHdkw2arw?download=1'},
    ],
  },
];

// --- HÀM LẤY ICON ĐÃ ĐƯỢC CẬP NHẬT ---
function getIconForItem(item, categoryName) {
  const hasChildren = item.children && item.children.length > 0;
  if (hasChildren) {
    return '📁'; // Luôn là icon thư mục nếu có children
  }
  if (categoryName === 'PRINTER') {
    return '🖨️';
  }
  return '🗂️'; // Mặc định là icon hộp
}

// --- COMPONENT GRIDBUTTON ĐÃ ĐƯỢC CẬP NHẬT ---
function GridButton({ item, onButtonClick, categoryName }) {
  const { name, link, children } = item;
  const hasSubItems = children && children.length > 0;
  const isExternal = link && (link.startsWith('http') || link.startsWith('https'));

  const content = (
    <>
      <span className="item-icon">{getIconForItem(item, categoryName)}</span>
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
            {activeCategory && activeCategory.layout === 'groupedGrid' ? (
              <div className="groupedGridContainer">
                {activeCategory.groups.map(group => (
                  <div key={group.title} className="itemGroup">
                    <div className="gridContainer">
                      {group.items.map((item, index) => (
                        <GridButton key={index} item={item} categoryName={activeCategory.name} onButtonClick={handleButtonClick} />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="gridContainer">
                {activeCategory && activeCategory.items.map((item, index) => (
                  <GridButton key={index} item={item} categoryName={activeCategory.name} onButtonClick={handleButtonClick} />
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
