import React from "react";
import { motion } from "framer-motion";

const Services = () => {
  return (
    <div
      className="w-full min-h-screen bg-fixed bg-cover bg-center relative"
      style={{ backgroundImage: "url('/src/assets/japan2.jpg')" }}
    >
      {/* Background Overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-60"
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/20" />
      
      {/* Main Content Container */}
      <div className="relative z-20 flex items-center justify-center min-h-screen py-20 px-4">
        <div className="max-w-6xl mx-auto w-full">
          
          {/* Header Section */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-6"
            >
              <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-slate-300 text-sm font-medium tracking-wide uppercase">
                Our Services
              </span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-6xl font-bold text-white mb-6"
            >
              We're I-Nexus
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-slate-300 max-w-3xl mx-auto"
            >
              低予算での制作から本格Webサイトまで、幅広く承っております。
            </motion.p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            
            {/* Basic Plan */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300"
            >
              <div className="text-center mb-6">
                <div className="text-3xl font-bold text-white mb-3">
                  〜¥50,000
                </div>
                <div className="h-0.5 w-16 bg-slate-400 mx-auto rounded-full" />
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex items-center text-slate-300">
                  <div className="w-2 h-2 bg-slate-400 rounded-full mr-3" />
                  <span>新規事業</span>
                </div>
                <div className="flex items-center text-slate-300">
                  <div className="w-2 h-2 bg-slate-400 rounded-full mr-3" />
                  <span>スタートアップ事業</span>
                </div>
              </div>

              <p className="text-slate-300 text-sm leading-relaxed">
                限られたご予算でも高品質でプロフェッショナルなサイトを実現いたします
              </p>
            </motion.div>

            {/* Standard Plan */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300"
            >
              <div className="text-center mb-6">
                <div className="text-3xl font-bold text-white mb-3">
                  ¥50,000〜
                </div>
                <div className="h-0.5 w-16 bg-slate-400 mx-auto rounded-full" />
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex items-center text-slate-300">
                  <div className="w-2 h-2 bg-slate-400 rounded-full mr-3" />
                  <span>小規模事業のオーナー</span>
                </div>
                <div className="flex items-center text-slate-300">
                  <div className="w-2 h-2 bg-slate-400 rounded-full mr-3" />
                  <span>個人事業主</span>
                </div>
              </div>

              <p className="text-slate-300 text-sm leading-relaxed">
                企業に頼む予算がない…そんなあなたに最適なプランを提供します
              </p>
            </motion.div>

            {/* Premium Plan */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300"
            >
              <div className="text-center mb-6">
                <div className="text-3xl font-bold text-white mb-3">
                  ¥500,000〜
                </div>
                <div className="h-0.5 w-16 bg-slate-400 mx-auto rounded-full" />
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex items-center text-slate-300">
                  <div className="w-2 h-2 bg-slate-400 rounded-full mr-3" />
                  <span>中小企業</span>
                </div>
                <div className="flex items-center text-slate-300">
                  <div className="w-2 h-2 bg-slate-400 rounded-full mr-3" />
                  <span>クリエイティブ業界</span>
                </div>
              </div>

              <p className="text-slate-300 text-sm leading-relaxed">
                完全オリジナルのデザインで差別化を図ります
              </p>
            </motion.div>
          </div>

          {/* Bottom Quotes */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="text-center space-y-3"
          >
            <p className="text-slate-400 text-lg">
              「予算5万円でWebサイトを作って依頼できるの？」
            </p>
            <p className="text-slate-400 text-lg">
              「予算内でWebサイトを作れる会社があれば･･･」
            </p>
            <p className="text-slate-400 text-lg">
              「細部までこだわった本格的なWebサイトを作りたい」
            </p>
          </motion.div>
          
        </div>
      </div>
    </div>
  );
};

export default Services;