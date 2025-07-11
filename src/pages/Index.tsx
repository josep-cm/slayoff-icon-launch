
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  Smartphone, 
  Camera, 
  Users, 
  Trophy, 
  Star, 
  TrendingUp, 
  Heart, 
  Share2, 
  Download,
  Instagram,
  Twitter,
  Facebook,
  Mail,
  QrCode,
  ArrowRight,
  Sparkles,
  Crown,
  DollarSign
} from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-fashion-accent text-fashion-brown border-none px-4 py-2 text-sm font-medium">
                  ✨ Fashion Social Network
                </Badge>
                <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                  <span className="text-fashion-brown">From Outfit</span>
                  <br />
                  <span className="text-fashion-light-brown">to Icon</span>
                </h1>
                <p className="text-xl text-fashion-light-brown leading-relaxed">
                  Let the World See You
                </p>
                <p className="text-lg text-muted-foreground max-w-md">
                  Join the fashion revolution where your style becomes your superpower. Share outfits, join challenges, and turn your fashion sense into influence.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-fashion-brown hover:bg-fashion-brown/90 text-white px-8 py-6 text-lg">
                  <Download className="mr-2 h-5 w-5" />
                  Download App
                </Button>
                <Button variant="outline" className="border-fashion-brown text-fashion-brown hover:bg-fashion-accent px-8 py-6 text-lg">
                  <QrCode className="mr-2 h-5 w-5" />
                  Scan QR Code
                </Button>
              </div>
              
              <div className="flex items-center gap-6 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-fashion-brown">50K+</div>
                  <div className="text-sm text-muted-foreground">Fashion Creators</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-fashion-brown">1M+</div>
                  <div className="text-sm text-muted-foreground">Outfits Shared</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-fashion-brown">100K+</div>
                  <div className="text-sm text-muted-foreground">Daily Active Users</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-fashion-accent to-fashion-beige rounded-3xl p-8 h-96 flex items-center justify-center">
                <div className="text-6xl">📱</div>
              </div>
              <div className="absolute -top-4 -right-4 bg-white p-4 rounded-2xl shadow-lg">
                <QrCode className="h-16 w-16 text-fashion-brown" />
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

      {/* Footer Section */}
      <footer className="bg-fashion-brown text-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">SlayOff</h3>
              <p className="text-white/80">
                The fashion social network where style meets influence
              </p>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Follow Us</h4>
              <div className="flex gap-4">
                <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                  <Instagram className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                  <Twitter className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                  <Facebook className="h-5 w-5" />
                </Button>
              </div>
            </div>
            
            <div className="space-y-4 lg:col-span-2">
              <h4 className="text-lg font-semibold">Stay Updated</h4>
              <p className="text-white/80 text-sm">
                Get the latest fashion trends and app updates delivered to your inbox
              </p>
              <div className="flex gap-2">
                <Input 
                  placeholder="Enter your email" 
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                />
                <Button className="bg-white text-fashion-brown hover:bg-white/90">
                  <Mail className="h-4 w-4 mr-2" />
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/20 pt-8 text-center text-white/60">
            <p>&copy; 2024 SlayOff. All rights reserved. From Outfit to Icon — Let the World See You.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
