'use client';

const Footer = () => {
  const relatedLinks = [
    '武蔵野の路',
    'かたらいの路',
    '雑木林のみち',
    '大多摩ウォーキングトレイル'
  ];

  return (
    <footer className="gradient-dark text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <div>
            <h3 className="text-2xl font-bold mb-4">NAZOARUKI</h3>
            <p className="text-gray-300 leading-relaxed">
              東京の歴史と文化を歩いて発見
            </p>
          </div>

          {/* Related Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-primary-400">
              関連リンク
            </h4>
            <ul className="space-y-3">
              {relatedLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors duration-300 hover:underline"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Information */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-primary-400">
              お知らせ
            </h4>
            <p className="text-gray-300 leading-relaxed">
              標識類は都や区や市により、少しづつ撤去されていますが、コースの魅力は変わりません。
            </p>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-600 pt-8">
          <p className="text-center text-gray-400">
            &copy; 2024 NAZOARUKI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;