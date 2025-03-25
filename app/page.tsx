import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FaTwitter, FaTelegramPlane, FaDiscord } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Page() {
  return (
    <main className="bg-black text-white min-h-screen p-6">
      <motion.section 
        className="text-center py-16"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl font-bold mb-4">BEDROOM TRADER OLI</h1>
        <p className="text-xl max-w-2xl mx-auto mb-6">
          Join the revolution of decentralized trading with Bedroom Trader OLI — a meme token with purpose and power.
        </p>
        <Button className="text-lg px-6 py-3">Get Started</Button>
      </motion.section>

      <motion.section 
        className="grid md:grid-cols-2 gap-8 py-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <Card className="bg-gray-900 border-none shadow-xl">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-2">About Us</h2>
            <p>
              Bedroom Trader OLI was born from a passion for crypto and a love of memes. We believe in financial freedom, transparency, and community-driven innovation.
            </p>
          </CardContent>
        </Card>
        <Card className="bg-gray-900 border-none shadow-xl">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-2">Tokenomics</h2>
            <p>
              Total Supply: 1,000,000,000 OLI<br/>
              Tax: 5% (2% Liquidity, 2% Marketing, 1% Holder Rewards)<br/>
              No team allocation. 100% community-focused.
            </p>
          </CardContent>
        </Card>
      </motion.section>

      <motion.section 
        className="py-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold text-center mb-8">Roadmap</h2>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
          <Card className="bg-gray-800">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">Phase 1</h3>
              <p>
                Launch token, build community, and get listed on DEXs. Start meme campaign.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-gray-800">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">Phase 2</h3>
              <p>
                Partnerships, CEX listings, NFT utility launch, and staking system.
              </p>
            </CardContent>
          </Card>
        </div>
      </motion.section>

      <motion.section 
        className="py-16 bg-gray-900 rounded-xl"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">NFT Utility</h2>
          <p className="text-lg">
            Holders of Bedroom Trader OLI NFTs gain access to exclusive trading signals, private community groups, and monthly airdrops. Each NFT is uniquely crafted and serves a functional purpose in our ecosystem.
          </p>
        </div>
      </motion.section>

      <motion.section 
        className="py-16 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-6">Join Our Community</h2>
        <div className="flex justify-center gap-6 text-2xl">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
          <a href="https://t.me" target="_blank" rel="noopener noreferrer">
            <FaTelegramPlane />
          </a>
          <a href="https://discord.com" target="_blank" rel="noopener noreferrer">
            <FaDiscord />
          </a>
        </div>
      </motion.section>

      <footer className="border-t border-gray-700 mt-16 pt-6 text-center text-sm text-gray-400">
        <p>&copy; {new Date().getFullYear()} Bedroom Trader OLI. All rights reserved.</p>
        <p className="mt-2">
          <a href="#" className="underline hover:text-white">Privacy Policy</a> | <a href="#" className="underline hover:text-white">Terms & Conditions</a>
        </p>
      </footer>
    </main>
  );
}