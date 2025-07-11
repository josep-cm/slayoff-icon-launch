
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Camera, 
  Users, 
  Trophy, 
  Star, 
  TrendingUp, 
  Heart, 
  Share2, 
  QrCode,
  Crown,
  DollarSign,
  Instagram,
  Twitter,
  Facebook,
  Sparkles,
  Smartphone
} from "lucide-react";

const Index = () => {
  const scrollToQRCodes = () => {
    document.getElementById('qr-codes')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-6xl lg:text-8xl font-bold leading-tight mb-8">
              <span className="text-fashion-brown block mb-2">SlayOff</span>
            </h1>
            <Badge className="bg-fashion-accent text-fashion-brown border-none px-6 py-3 text-lg font-medium mb-6">
              ✨ Slay Your Style Every Day
            </Badge>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h2 className="text-5xl lg:text-6xl font-bold leading-tight">
                  <span className="text-fashion-brown">From Outfit</span>
                  <br />
                  <span className="text-fashion-light-brown">to Icon</span>
                </h2>
                <p className="text-2xl text-fashion-light-brown leading-relaxed font-medium">
                  Let the World See You
                </p>
                <p className="text-xl text-fashion-light-brown max-w-lg leading-relaxed">
                  Join the fashion revolution where your style becomes your superpower. Share outfits, join challenges, and turn your fashion sense into influence.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-6">
                <Button 
                  onClick={scrollToQRCodes}
                  className="bg-fashion-brown hover:bg-fashion-brown/90 text-white px-10 py-8 text-xl font-semibold"
                >
                  <Smartphone className="mr-3 h-6 w-6" />
                  Download App
                </Button>
              </div>
              
              <div className="pt-6">
                <p className="text-2xl font-bold text-fashion-brown mb-2">Slay the Day, Every Day! 💅</p>
                <p className="text-lg text-fashion-light-brown">Your style journey starts here</p>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-fashion-accent to-fashion-beige rounded-3xl p-8 h-[500px] flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-4 bg-gradient-to-b from-fashion-brown/5 to-fashion-brown/10 rounded-2xl flex flex-col items-center justify-center">
                  <div className="text-8xl mb-4">📱</div>
                  <div className="space-y-2 text-center">
                    <div className="bg-white/80 backdrop-blur-sm rounded-lg p-3 mx-4">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-8 h-8 bg-fashion-brown/20 rounded-full"></div>
                        <div className="text-left">
                          <div className="text-sm font-semibold text-fashion-brown">@fashionista</div>
                          <div className="text-xs text-fashion-light-brown">Slaying today's look ✨</div>
                        </div>
                      </div>
                      <div className="w-full h-32 bg-gradient-to-br from-pink-100 to-purple-100 rounded-lg mb-2 flex items-center justify-center">
                        <span className="text-2xl">👗</span>
                      </div>
                      <div className="flex justify-between text-xs text-fashion-light-brown">
                        <span>❤️ 2.3k</span>
                        <span>💬 156</span>
                        <span>🔥 Trending</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-4 bg-fashion-accent/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-fashion-brown mb-4">
              How SlayOff Works
            </h2>
            <p className="text-xl text-fashion-light-brown max-w-2xl mx-auto">
              Four simple steps to turn your fashion passion into influence
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-none shadow-lg bg-white/80 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <div className="bg-fashion-brown/10 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Camera className="h-8 w-8 text-fashion-brown" />
                </div>
                <h3 className="text-xl font-bold text-fashion-brown mb-3">Upload Your Look</h3>
                <p className="text-fashion-light-brown">Share your daily outfits and style moments with the community</p>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-lg bg-white/80 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <div className="bg-fashion-brown/10 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Heart className="h-8 w-8 text-fashion-brown" />
                </div>
                <h3 className="text-xl font-bold text-fashion-brown mb-3">Get Visibility</h3>
                <p className="text-fashion-light-brown">Receive likes, comments, and build your fashion following</p>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-lg bg-white/80 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <div className="bg-fashion-brown/10 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Trophy className="h-8 w-8 text-fashion-brown" />
                </div>
                <h3 className="text-xl font-bold text-fashion-brown mb-3">Join Challenges</h3>
                <p className="text-fashion-light-brown">Participate in style challenges and competitions to showcase your creativity</p>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-lg bg-white/80 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <div className="bg-fashion-brown/10 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Crown className="h-8 w-8 text-fashion-brown" />
                </div>
                <h3 className="text-xl font-bold text-fashion-brown mb-3">Become an Icon</h3>
                <p className="text-fashion-light-brown">Rise through the ranks and establish yourself as a fashion influencer</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-fashion-brown mb-4">
              Your Fashion Journey
            </h2>
            <p className="text-xl text-fashion-light-brown max-w-2xl mx-auto">
              Two phases to transform your style passion into a thriving career
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Phase 1 */}
            <Card className="border-2 border-fashion-brown/20 shadow-xl bg-gradient-to-br from-white to-fashion-accent/20">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Badge className="bg-fashion-brown text-white px-4 py-2 text-lg">Phase 1</Badge>
                  <Sparkles className="h-6 w-6 text-fashion-brown" />
                </div>
                <h3 className="text-3xl font-bold text-fashion-brown mb-4">
                  Build Your Fashion Identity
                </h3>
                <p className="text-fashion-light-brown mb-6 text-lg">
                  Establish your unique style presence and connect with the fashion community
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="bg-fashion-brown/10 rounded-full p-2 mt-1">
                      <Share2 className="h-4 w-4 text-fashion-brown" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-fashion-brown">Share Your Outfits</h4>
                      <p className="text-sm text-fashion-light-brown">Upload daily looks and style inspirations</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="bg-fashion-brown/10 rounded-full p-2 mt-1">
                      <Users className="h-4 w-4 text-fashion-brown" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-fashion-brown">Discover Community</h4>
                      <p className="text-sm text-fashion-light-brown">Connect with like-minded fashion enthusiasts</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="bg-fashion-brown/10 rounded-full p-2 mt-1">
                      <Star className="h-4 w-4 text-fashion-brown" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-fashion-brown">Get Ranked</h4>
                      <p className="text-sm text-fashion-light-brown">Climb the style leaderboards and gain recognition</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Phase 2 */}
            <Card className="border-2 border-fashion-brown shadow-xl bg-gradient-to-br from-fashion-brown/5 to-fashion-brown/10">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Badge className="bg-fashion-brown text-white px-4 py-2 text-lg">Phase 2</Badge>
                  <DollarSign className="h-6 w-6 text-fashion-brown" />
                </div>
                <h3 className="text-3xl font-bold text-fashion-brown mb-4">
                  Monetize Your Style
                </h3>
                <p className="text-fashion-light-brown mb-6 text-lg">
                  Transform your influence into income and collaborate with top brands
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="bg-fashion-brown/10 rounded-full p-2 mt-1">
                      <TrendingUp className="h-4 w-4 text-fashion-brown" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-fashion-brown">Brand Discovery</h4>
                      <p className="text-sm text-fashion-light-brown">Get discovered by fashion brands seeking influencers</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="bg-fashion-brown/10 rounded-full p-2 mt-1">
                      <Smartphone className="h-4 w-4 text-fashion-brown" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-fashion-brown">Product Tagging</h4>
                      <p className="text-sm text-fashion-light-brown">Tag products in your posts and earn commissions</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="bg-fashion-brown/10 rounded-full p-2 mt-1">
                      <Crown className="h-4 w-4 text-fashion-brown" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-fashion-brown">Influence & Earn</h4>
                      <p className="text-sm text-fashion-light-brown">Turn your fashion expertise into a revenue stream</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* QR Codes Section */}
      <section id="qr-codes" className="py-20 px-4 bg-fashion-accent/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-fashion-brown mb-4">
            Ready to Slay?
          </h2>
          <p className="text-xl text-fashion-light-brown mb-12">
            Download SlayOff now and start your style journey
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <Card className="border-2 border-fashion-brown/20 shadow-xl bg-white/90 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <div className="bg-white p-6 rounded-2xl shadow-inner mb-4 mx-auto w-fit">
                  <QrCode className="h-24 w-24 text-fashion-brown mx-auto" />
                </div>
                <h3 className="text-2xl font-bold text-fashion-brown mb-2">iOS</h3>
                <p className="text-fashion-light-brown">Scan to download from App Store</p>
              </CardContent>
            </Card>
            
            <Card className="border-2 border-fashion-brown/20 shadow-xl bg-white/90 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <div className="bg-white p-6 rounded-2xl shadow-inner mb-4 mx-auto w-fit">
                  <QrCode className="h-24 w-24 text-fashion-brown mx-auto" />
                </div>
                <h3 className="text-2xl font-bold text-fashion-brown mb-2">Android</h3>
                <p className="text-fashion-light-brown">Scan to download from Google Play</p>
              </CardContent>
            </Card>
          </div>
          
          <div className="mt-12">
            <p className="text-2xl font-bold text-fashion-brown mb-2">Slay Your Style, Own Your Story! ✨</p>
            <p className="text-lg text-fashion-light-brown">Join thousands of fashion creators already slaying on SlayOff</p>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-fashion-brown text-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="space-y-4">
              <h3 className="text-3xl font-bold">SlayOff</h3>
              <p className="text-white/80 text-lg">
                The fashion social network where style meets influence
              </p>
              <p className="text-white/60">
                From Outfit to Icon — Let the World See You
              </p>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-xl font-semibold">Follow Us</h4>
              <div className="flex gap-4">
                <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                  <Instagram className="h-6 w-6" />
                </Button>
                <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                  <Twitter className="h-6 w-6" />
                </Button>
                <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                  <Facebook className="h-6 w-6" />
                </Button>
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-xl font-semibold">Ready to Slay?</h4>
              <p className="text-white/80">
                Your fashion journey starts with a single post. Make it count! 💫
              </p>
            </div>
          </div>
          
          <div className="border-t border-white/20 pt-8 text-center text-white/60">
            <p>&copy; 2024 SlayOff. All rights reserved. Slay the day, every day! ✨</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
