import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const Layout = ({ children }: { children: ReactNode }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const showBackButton = location.pathname !== "/";

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      {showBackButton && (
        <div className="container mx-auto px-4 py-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="w-4 h-4" /> Back
          </Button>
        </div>
      )}
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
