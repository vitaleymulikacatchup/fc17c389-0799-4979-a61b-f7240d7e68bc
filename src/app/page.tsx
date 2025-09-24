use client
import { SiteThemeProvider } from '@/components/sections/ThemeProvider';
import NavbarBase from '@/components/navigation/NavbarBase';
import TokenBillboardHero from '@/components/sections/layouts/hero/TokenBillboardHero';
import SplitAbout from '@/components/sections/layouts/about/SplitAbout';
import HowToBuy3D from '@/components/sections/layouts/howtobuy/3DHTB';
import ExpandingGridTokenomics from '@/components/sections/layouts/tokenomics/ExpandingGridTokenomics';
import FooterLogo from '@/components/footer/FooterLogo';

export default function Home() {
  return (
    <SiteThemeProvider theme={{ styleVariant: 'futuristicAndOutOfBox', colorTemplate: 1, textAnimation: 'slide' }}>
      <div id="nav" data-section="nav">
        <NavbarBase 
          logoSrc="/images/logo.svg"
          logoAlt="Peak Logo"
          logoClassName="h-10"
          leftButtonText=""
          rightButtonText="Contact Peak"
          onLeftButtonClick={() => {}}
          onRightButtonClick={() => {}}
          className="bg-transparent sticky top-0"
        />
      </div>
      <div id="hero" data-section="hero" className="scroll-mt-24">
        <TokenBillboardHero 
          title="Welcome to Peak"
          subtitle="Your future starts here"
          contractAddress="0x123456789"
          copyButtonText="Copy Address"
          copiedText="Address Copied!"
        />
      </div>
      <div id="about" data-section="about" className="scroll-mt-24">
        <SplitAbout 
          description="Peak is designed for the modern user, blending aesthetics and utility in a seamless interface that feels both futuristic and premium."
        />
      </div>
      <div id="how-to-buy" data-section="how-to-buy" className="scroll-mt-24">
        <HowToBuy3D 
          title="How to Buy Peak"
          steps={[
            { title: "Step 1", description: "Create an account", image: "/images/placeholder1.avif", position: "left", isCenter: false },
            { title: "Step 2", description: "Verify your identity", image: "/images/placeholder2.avif", position: "center", isCenter: true },
            { title: "Step 3", description: "Make your first purchase", image: "/images/placeholder3.avif", position: "right", isCenter: false }
          ]}
        />
      </div>
      <div id="tokenomics" data-section="tokenomics" className="scroll-mt-24">
        <ExpandingGridTokenomics 
          title="Tokenomics"
          description="Our token model ensures sustainable growth and stability, driving long-term value for our community."
          cardItems={[
            { id: 1, title: "Liquidity", description: "30% of the total supply will be directed to liquidity pools" },
            { id: 2, title: "Market Cap", description: "Target market cap of $5 million within the first year" },
            { id: 3, title: "Community Rewards", description: "10% allocated for community-driven initiatives" }
          ]}
        />
      </div>
      <div id="footer" data-section="footer" className="scroll-mt-24">
        <FooterLogo 
          logoSrc="/images/logo.svg"
          logoAlt="Peak Logo"
          logoText="Peak"
          className="footer-logo"
          svgClassName="svg-footer"
        />
      </div>
    </SiteThemeProvider>
  );
}
