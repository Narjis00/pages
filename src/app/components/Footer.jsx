import React from "react";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="bg-[#13181b] text-white py-4 mt-8">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-sm">© 2023 MyWebsite. All rights reserved.</div>
                <div>
                    <ul className="flex space-x-4">
                        <li>
                            <Link href="/privacy" legacyBehavior>
                                <a className="hover:text-gray-400">Privacy Policy</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/terms" legacyBehavior>
                                <a className="hover:text-gray-400">Terms of Service</a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
