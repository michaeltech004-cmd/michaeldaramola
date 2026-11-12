import {
  BadgeCheck, Code2, Download, FileText, LayoutDashboard, Link2, MessageCircle, Package, Palette,
  Puzzle, RefreshCcw, ScanEye, Search, Shirt, ShoppingBag, ShoppingCart, Smartphone, TrendingUp, Users,
  type LucideIcon,
} from "lucide-react";

const map: Record<string, LucideIcon> = {
  BadgeCheck, Code2, Download, FileText, LayoutDashboard, Link2, MessageCircle, Package, Palette,
  Puzzle, RefreshCcw, ScanEye, Search, Shirt, ShoppingBag, ShoppingCart, Smartphone, TrendingUp, Users,
};

export function Icon({ name, className }: { name: string; className?: string }) {
  const Cmp = map[name] ?? ShoppingBag;
  return <Cmp className={className} aria-hidden="true" />;
}
