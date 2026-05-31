import {
  Code2,
  Server,
  FileCode,
  Zap,
  BookOpen,
  Brain,
  Database,
  Globe,
  Layers,
  Terminal,
  Cpu,
  Lock,
  type LucideIcon,
} from "lucide-react";

export const iconRegistry: Record<string, LucideIcon> = {
  Code2,
  Server,
  FileCode,
  Zap,
  BookOpen,
  Brain,
  Database,
  Globe,
  Layers,
  Terminal,
  Cpu,
  Lock,
};

export function getIcon(name: string): LucideIcon {
  return iconRegistry[name] ?? BookOpen;
}