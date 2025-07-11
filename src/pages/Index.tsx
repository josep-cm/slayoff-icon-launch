
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
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 px-4 gradient-hero min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-8xl lg:text-9xl font-black leading-none mb-8">
              <span className="text-black block mb-4">SlayOff</span>
            </h1>
            <Badge className="bg-white/90 backdrop-blur-sm text-charcoal border-2 border-charcoal/20 px-8 py-4 text-xl font-bold mb-8 shadow-lg">
              Slay Your Style Every Day
            </Badge>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-10">
              <div className="space-y-8">
                <h2 className="text-6xl lg:text-7xl font-black leading-tight">
                  <span className="text-charcoal">From Outfit</span>
                  <br />
                  <span className="text-gradient">to Icon</span>
                </h2>
                <p className="text-3xl font-bold text-charcoal leading-relaxed">
                  Let the World See You
                </p>
                <p className="text-xl text-charcoal/70 max-w-lg leading-relaxed font-medium">
                  Join the fashion revolution where your style becomes your superpower. Share outfits, join challenges, and turn your fashion sense into influence.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-8">
                <Button 
                  onClick={scrollToQRCodes}
                  className="bg-electric-lavender hover:bg-electric-lavender/90 text-white px-12 py-8 text-2xl font-bold shadow-2xl transform hover:scale-105 transition-all duration-300"
                  size="lg"
                >
                  <Smartphone className="mr-4 h-8 w-8" />
                  Download App
                </Button>
              </div>
              
              <div className="pt-8">
                <p className="text-3xl font-black text-charcoal mb-3">Slay the Day, Every Day!</p>
                <p className="text-xl text-charcoal/70 font-semibold">Your style journey starts here</p>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-white/90 to-fashion-warm-beige/60 backdrop-blur-sm rounded-3xl p-10 h-[600px] flex items-center justify-center relative overflow-hidden shadow-2xl border border-white/50">
                <div className="absolute inset-6 bg-gradient-to-b from-charcoal/5 to-charcoal/15 rounded-2xl flex flex-col items-center justify-center">
                  <div className="text-9xl mb-6">📱</div>
                  <div className="space-y-4 text-center w-full max-w-sm">
                    <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 mx-4 shadow-xl border border-charcoal/10">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-charcoal/20 rounded-full"></div>
                        <div className="text-left">
                          <div className="text-lg font-bold text-charcoal">@fashionista</div>
                          <div className="text-sm text-charcoal/70 font-medium">Slaying today's look</div>
                        </div>
                      </div>
                      <div className="w-full h-40 bg-gradient-to-br from-fashion-warm-beige to-fashion-electric-lavender/30 rounded-xl mb-4 flex items-center justify-center shadow-inner">
                        <span className="text-4xl">👗</span>
                      </div>
                      <div className="flex justify-between text-sm font-semibold text-charcoal/70">
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
      <section className="py-24 px-4 gradient-dark text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-6xl font-black text-white mb-6">
              How SlayOff Works
            </h2>
            <p className="text-2xl text-white/80 max-w-3xl mx-auto font-medium">
              Four simple steps to turn your fashion passion into influence
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            <Card className="border-none shadow-2xl bg-white/10 backdrop-blur-sm hover:bg-white/15 transition-all duration-300 transform hover:scale-105">
              <CardContent className="p-10 text-center">
                <div className="bg-fashion-electric-lavender/30 rounded-full p-6 w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                  <Camera className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Upload Your Look</h3>
                <p className="text-white/80 font-medium">Share your daily outfits and style moments with the community</p>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-2xl bg-white/10 backdrop-blur-sm hover:bg-white/15 transition-all duration-300 transform hover:scale-105">
              <CardContent className="p-10 text-center">
                <div className="bg-fashion-electric-lavender/30 rounded-full p-6 w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                  <Heart className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Get Visibility</h3>
                <p className="text-white/80 font-medium">Receive likes, comments, and build your fashion following</p>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-2xl bg-white/10 backdrop-blur-sm hover:bg-white/15 transition-all duration-300 transform hover:scale-105">
              <CardContent className="p-10 text-center">
                <div className="bg-fashion-electric-lavender/30 rounded-full p-6 w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                  <Trophy className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Join Challenges</h3>
                <p className="text-white/80 font-medium">Participate in style challenges and competitions to showcase your creativity</p>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-2xl bg-white/10 backdrop-blur-sm hover:bg-white/15 transition-all duration-300 transform hover:scale-105">
              <CardContent className="p-10 text-center">
                <div className="bg-fashion-electric-lavender/30 rounded-full p-6 w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                  <Crown className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Become an Icon</h3>
                <p className="text-white/80 font-medium">Rise through the ranks and establish yourself as a fashion influencer</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section className="py-24 px-4 gradient-lavender">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-6xl font-black text-charcoal mb-6">
              Your Fashion Journey
            </h2>
            <p className="text-2xl text-charcoal/70 max-w-3xl mx-auto font-medium">
              Two phases to transform your style passion into a thriving career
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Phase 1 */}
            <Card className="border-4 border-charcoal shadow-2xl bg-gradient-to-br from-charcoal/5 to-charcoal/15 hover:shadow-3xl transition-all duration-300 transform hover:scale-105">
              <CardContent className="p-12">
                <div className="flex items-center gap-4 mb-8">
                  <Badge className="bg-gradient-to-r from-charcoal to-electric-lavender text-white px-6 py-3 text-xl font-bold">Phase 1</Badge>
                  <Sparkles className="h-8 w-8 text-electric-lavender" />
                </div>
                <h3 className="text-4xl font-black text-charcoal mb-6">
                  Build Your Fashion Identity
                </h3>
                <p className="text-charcoal/70 mb-8 text-xl font-medium">
                  Establish your unique style presence and connect with the fashion community
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-electric-lavender/20 rounded-full p-3 mt-1">
                      <Share2 className="h-6 w-6 text-electric-lavender" />
                    </div>
                    <div>
                      <h4 className="font-bold text-charcoal text-lg">Share Your Outfits</h4>
                      <p className="text-charcoal/70 font-medium">Upload daily looks and style inspirations</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-electric-lavender/20 rounded-full p-3 mt-1">
                      <Users className="h-6 w-6 text-electric-lavender" />
                    </div>
                    <div>
                      <h4 className="font-bold text-charcoal text-lg">Discover Community</h4>
                      <p className="text-charcoal/70 font-medium">Connect with like-minded fashion enthusiasts</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-electric-lavender/20 rounded-full p-3 mt-1">
                      <Star className="h-6 w-6 text-electric-lavender" />
                    </div>
                    <div>
                      <h4 className="font-bold text-charcoal text-lg">Get Ranked</h4>
                      <p className="text-charcoal/70 font-medium">Climb the style leaderboards and gain recognition</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Phase 2 */}
            <Card className="border-4 border-charcoal shadow-2xl bg-gradient-to-br from-charcoal/5 to-charcoal/15 hover:shadow-3xl transition-all duration-300 transform hover:scale-105">
              <CardContent className="p-12">
                <div className="flex items-center gap-4 mb-8">
                  <Badge className="bg-gradient-to-r from-charcoal to-electric-lavender text-white px-6 py-3 text-xl font-bold">Phase 2</Badge>
                  <DollarSign className="h-8 w-8 text-electric-lavender" />
                </div>
                <h3 className="text-4xl font-black text-charcoal mb-6">
                  Monetize Your Style
                </h3>
                <p className="text-charcoal/70 mb-8 text-xl font-medium">
                  Transform your influence into income and collaborate with top brands
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-electric-lavender/20 rounded-full p-3 mt-1">
                      <TrendingUp className="h-6 w-6 text-electric-lavender" />
                    </div>
                    <div>
                      <h4 className="font-bold text-charcoal text-lg">Brand Discovery</h4>
                      <p className="text-charcoal/70 font-medium">Get discovered by fashion brands seeking influencers</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-electric-lavender/20 rounded-full p-3 mt-1">
                      <Smartphone className="h-6 w-6 text-electric-lavender" />
                    </div>
                    <div>
                      <h4 className="font-bold text-charcoal text-lg">Product Tagging</h4>
                      <p className="text-charcoal/70 font-medium">Tag products in your posts and earn commissions</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-electric-lavender/20 rounded-full p-3 mt-1">
                      <Crown className="h-6 w-6 text-electric-lavender" />
                    </div>
                    <div>
                      <h4 className="font-bold text-charcoal text-lg">Influence & Earn</h4>
                      <p className="text-charcoal/70 font-medium">Turn your fashion expertise into a revenue stream</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* QR Codes Section */}
      <section id="qr-codes" className="py-24 px-4 gradient-dark text-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-5xl lg:text-6xl font-black text-black mb-6">
            Ready to Slay?
          </h2>
          <p className="text-2xl text-white/80 mb-16 font-medium">
            Download SlayOff now and start your style journey
          </p>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-3xl mx-auto">
            <Card className="border-4 border-white/30 shadow-2xl bg-white/10 backdrop-blur-sm hover:bg-white/15 transition-all duration-300 transform hover:scale-105">
              <CardContent className="p-12 text-center">
                <div className="bg-white p-8 rounded-3xl shadow-inner mb-6 mx-auto w-fit">
                  <QrCode className="h-32 w-32 text-charcoal mx-auto" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-3">iOS</h3>
                <p className="text-white/80 font-medium text-lg">Scan to download from App Store</p>
              </CardContent>
            </Card>
            
            <Card className="border-4 border-white/30 shadow-2xl bg-white/10 backdrop-blur-sm hover:bg-white/15 transition-all duration-300 transform hover:scale-105">
              <CardContent className="p-12 text-center">
                <div className="bg-white p-8 rounded-3xl shadow-inner mb-6 mx-auto w-fit">
                  <QrCode className="h-32 w-32 text-charcoal mx-auto" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-3">Android</h3>
                <p className="text-white/80 font-medium text-lg">Scan to download from Google Play</p>
              </CardContent>
            </Card>
          </div>
          
          <div className="mt-16">
            <p className="text-3xl font-black text-white mb-3">
              Slay Your Style, Own Your Story!
            </p>
            <p className="text-xl text-white/80 font-medium">Join thousands of fashion creators already slaying on SlayOff</p>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-charcoal text-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 mb-16">
            <div className="space-y-6">
              <h3 className="text-4xl font-black text-black">SlayOff</h3>
              <p className="text-black text-xl font-medium">
                The fashion social network where style meets influence
              </p>
              <p className="text-black font-medium">
                From Outfit to Icon — Let the World See You
              </p>
            </div>
            
            <div className="space-y-6">
              <h4 className="text-2xl font-bold text-black">Follow Us</h4>
              <div className="flex gap-6">
                <Button variant="ghost" size="icon" className="text-white hover:bg-white/10 p-4">
                  <Instagram className="h-8 w-8" />
                </Button>
                <Button variant="ghost" size="icon" className="text-white hover:bg-white/10 p-4">
                  <Twitter className="h-8 w-8" />
                </Button>
                <Button variant="ghost" size="icon" className="text-white hover:bg-white/10 p-4">
                  <Facebook className="h-8 w-8" />
                </Button>
              </div>
            </div>
            
            <div className="space-y-6">
              <h4 className="text-2xl font-bold text-black">Ready to Slay?</h4>
              <p className="text-black font-medium text-lg">
                Your fashion journey starts with a single post. Make it count!
              </p>
            </div>
          </div>
          
          <div className="border-t border-white/20 pt-10 text-center text-white/60">
            <p className="text-lg text-black">&copy; 2024 SlayOff. All rights reserved. Slay the day, every day!</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
