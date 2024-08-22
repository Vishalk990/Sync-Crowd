import React from "react";
import { Github, Twitter, Mail, FileSpreadsheet, Database, BookOpen, Users, MessageSquare } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">SyncCrowd</h3>
            <p className="text-gray-400">
              Empowering businesses with synthetic data generation and CSV chat capabilities.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Products</h3>
            <ul className="space-y-2">
              <li>
                <a href="/dashboard" className="text-gray-400 hover:text-white flex items-center">
                  <Database className="w-4 h-4 mr-2" />
                  Synthetic Data Generator
                </a>
              </li>
              <li>
                <a href="/dashboard" className="text-gray-400 hover:text-white flex items-center">
                  <FileSpreadsheet className="w-4 h-4 mr-2" />
                  CSV Chat
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="/docs" className="text-gray-400 hover:text-white flex items-center">
                  <BookOpen className="w-4 h-4 mr-2" />
                  Documentation
                </a>
              </li>
              <li>
                <a href="/blog" className="text-gray-400 hover:text-white flex items-center">
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Blog
                </a>
              </li>
              <li>
                <a href="/community" className="text-gray-400 hover:text-white flex items-center">
                  <Users className="w-4 h-4 mr-2" />
                  Community
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Connect</h3>
            <div className="flex space-x-4">
              <a href="https://github.com/Vishalk990/Sync-Crowd" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://twitter.com/synccrowd" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="mailto:info@synccrowd.com" className="text-gray-400 hover:text-white">
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <span className="text-gray-400">© 2024 SyncCrowd. All rights reserved.</span>
            </div>
            <div className="flex space-x-6">
              <a href="/privacy" className="text-gray-400 hover:text-white">Privacy Policy</a>
              <a href="/terms" className="text-gray-400 hover:text-white">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;