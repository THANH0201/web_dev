import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Badge } from "../components/ui/badge";
import {
  Users,
  Calendar,
  FileText,
  Settings,
  Shield,
  Eye,
  EyeOff,
  Plus,
  Edit,
  Trash2,
  CheckCircle,
  XCircle,
  RotateCcw,
  Image as ImageIcon,
  Upload
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter
} from "../components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/ui/table";
import { Switch } from "../components/ui/switch";
import { toast } from "sonner@2.0.3";
import { ScrollArea } from "../components/ui/scroll-area";

interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  role: "customer" | "doctor" | "admin";
  status: "active" | "inactive";
  createdDate: string;
  lastLogin: string;
}

interface Appointment {
  id: string;
  patientName: string;
  doctorName: string;
  date: string;
  time: string;
  service: string;
  status: "scheduled" | "completed" | "cancelled";
}

interface NewsArticle {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  authorBio?: string;
  date: string;
  status: "published" | "draft";
  category: string;
  image: string;
  readTime: string;
  content: string; // HTML content
}

interface BannerSlide {
  id: string;
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
  image: string;
  category: "home" | "news" | "campaign" | "service";
  order: number;
  active: boolean;
  newsId?: string;
}

interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
  features: string[];
  icon: string;
  status: "active" | "inactive";
  order: number;
}

interface ActivityLog {
  id: string;
  user: string;
  action: string;
  timestamp: string;
  ipAddress: string;
  details: string;
}

export function AdminDashboardPage() {
  const [currentUser, setCurrentUser] = useState<any>(null);
  const [activeTab, setActiveTab] = useState("users");
  const [showPassword, setShowPassword] = useState(false);
  
  // Dialog states
  const [isArticleDialogOpen, setIsArticleDialogOpen] = useState(false);
  const [isBannerDialogOpen, setIsBannerDialogOpen] = useState(false);
  const [isServiceDialogOpen, setIsServiceDialogOpen] = useState(false);
  const [editingArticle, setEditingArticle] = useState<NewsArticle | null>(null);
  const [editingBanner, setEditingBanner] = useState<BannerSlide | null>(null);
  const [editingService, setEditingService] = useState<Service | null>(null);

  // Form states
  const [articleForm, setArticleForm] = useState({
    title: "",
    excerpt: "",
    author: "",
    authorBio: "",
    category: "Eye Health",
    image: "",
    readTime: "5 min read",
    content: ""
  });

  const [bannerForm, setBannerForm] = useState({
    title: "",
    subtitle: "",
    buttonText: "",
    buttonLink: "",
    image: "",
    category: "home" as "home" | "news" | "campaign" | "service",
    order: 1,
    newsId: ""
  });

  const [serviceForm, setServiceForm] = useState({
    title: "",
    description: "",
    image: "",
    features: ["", "", "", ""],
    icon: "Eye"
  });

  // Mock data
  const [users, setUsers] = useState<User[]>([
    {
      id: "user-001",
      firstName: "John",
      lastName: "Doe",
      email: "customer@clinic.com",
      phone: "(555) 123-4567",
      role: "customer",
      status: "active",
      createdDate: "2025-01-15",
      lastLogin: "2025-10-28"
    },
    {
      id: "user-002",
      firstName: "Dr. Sarah",
      lastName: "Johnson",
      email: "doctor@clinic.com",
      phone: "(555) 234-5678",
      role: "doctor",
      status: "active",
      createdDate: "2024-06-10",
      lastLogin: "2025-10-29"
    },
    {
      id: "user-003",
      firstName: "Emily",
      lastName: "Davis",
      email: "emily.davis@email.com",
      phone: "(555) 345-6789",
      role: "customer",
      status: "inactive",
      createdDate: "2025-09-20",
      lastLogin: "2025-09-25"
    }
  ]);

  const [appointments, setAppointments] = useState<Appointment[]>([
    {
      id: "apt-001",
      patientName: "John Doe",
      doctorName: "Dr. Sarah Johnson",
      date: "2025-10-30",
      time: "09:00 AM",
      service: "Comprehensive Eye Exam",
      status: "scheduled"
    },
    {
      id: "apt-002",
      patientName: "Emily Davis",
      doctorName: "Dr. Sarah Johnson",
      date: "2025-10-30",
      time: "10:30 AM",
      service: "Contact Lens Fitting",
      status: "scheduled"
    },
    {
      id: "apt-003",
      patientName: "Michael Brown",
      doctorName: "Dr. Sarah Johnson",
      date: "2025-10-29",
      time: "11:00 AM",
      service: "Follow-up Visit",
      status: "completed"
    }
  ]);

  const [newsArticles, setNewsArticles] = useState<NewsArticle[]>([
    {
      id: "regular-eye-exams",
      title: "The Importance of Regular Eye Exams",
      excerpt: "Many people underestimate the importance of regular eye examinations. Beyond just checking if you need new glasses, comprehensive eye exams can detect serious health conditions early.",
      author: "Dr. Sarah Mitchell",
      authorBio: "Dr. Sarah Mitchell is a board-certified optometrist with over 15 years of experience.",
      date: "2025-10-20",
      status: "published",
      category: "Eye Health",
      image: "https://images.unsplash.com/photo-1576210117723-cd06449a467d",
      readTime: "5 min read",
      content: "<h2>Why Regular Eye Exams Matter</h2><p>Your eyes are windows not only to your soul, but also to your overall health. Regular comprehensive eye examinations are one of the most important preventive health measures you can take.</p><p>Many serious eye conditions and systemic diseases develop without noticeable symptoms in their early stages, making routine eye exams crucial for early detection and treatment.</p>"
    },
    {
      id: "lasik-technology",
      title: "New Technology in LASIK Surgery",
      excerpt: "Discover the latest advances in laser vision correction that make the procedure safer and more effective than ever before.",
      author: "Dr. Michael Chen",
      date: "2025-10-15",
      status: "draft",
      category: "Technology",
      image: "https://images.unsplash.com/photo-1759910546804-68fd991aceac",
      readTime: "4 min read",
      content: "<h2>LASIK Technology Advances</h2><p>Modern LASIK surgery has evolved significantly with new technologies that provide better outcomes and faster recovery times.</p>"
    }
  ]);

  const [bannerSlides, setBannerSlides] = useState<BannerSlide[]>([
    {
      id: "banner-001",
      title: "Comprehensive Eye Care Services",
      subtitle: "Expert vision care for your entire family. State-of-the-art technology and compassionate service for all your eye health needs.",
      buttonText: "Book An Appointment",
      buttonLink: "#appointment",
      image: "https://images.unsplash.com/photo-1758691463610-3c2ecf5fb3fa",
      category: "home",
      order: 1,
      active: true
    },
    {
      id: "banner-002",
      title: "The Importance of Regular Eye Exams",
      subtitle: "Many people underestimate the importance of regular eye examinations. Learn how comprehensive eye exams can detect serious health conditions early.",
      buttonText: "Read Article",
      buttonLink: "#article?id=regular-eye-exams",
      image: "https://images.unsplash.com/photo-1576210117723-cd06449a467d",
      category: "news",
      newsId: "regular-eye-exams",
      order: 2,
      active: true
    },
    {
      id: "banner-003",
      title: "New Technology in LASIK Surgery",
      subtitle: "Discover the latest advances in laser vision correction that make the procedure safer and more effective than ever before.",
      buttonText: "Learn More",
      buttonLink: "#article?id=lasik-technology",
      image: "https://images.unsplash.com/photo-1759910546804-68fd991aceac",
      category: "news",
      newsId: "lasik-technology",
      order: 3,
      active: true
    }
  ]);

  const [services, setServices] = useState<Service[]>([
    {
      id: "comprehensive-eye-exams",
      title: "Comprehensive Eye Exams",
      description: "Complete eye health evaluations using advanced diagnostic technology to detect vision problems and eye diseases early.",
      image: "https://images.unsplash.com/photo-1759910546804-68fd991aceac",
      features: ["Visual Acuity Testing", "Refraction Assessment", "Eye Pressure Measurement", "Retinal Examination"],
      icon: "Eye",
      status: "active",
      order: 1
    },
    {
      id: "eyeglasses-frames",
      title: "Eyeglasses & Frames",
      description: "Wide selection of designer frames and prescription lenses customized to your vision needs and personal style.",
      image: "https://images.unsplash.com/photo-1759910546772-73e4bb7fdadd",
      features: ["Designer Frames", "Custom Lenses", "Anti-Glare Coating", "Blue Light Protection"],
      icon: "Glasses",
      status: "active",
      order: 2
    },
    {
      id: "contact-lenses",
      title: "Contact Lenses",
      description: "Expert fitting and comprehensive selection of contact lenses including daily, monthly, and specialty lenses.",
      image: "https://images.unsplash.com/photo-1627260125320-fbafe86e341e",
      features: ["Daily Disposables", "Monthly Lenses", "Toric for Astigmatism", "Multifocal Lenses"],
      icon: "TestTube",
      status: "active",
      order: 3
    }
  ]);

  const [clinicInfo, setClinicInfo] = useState({
    name: "Vision Clinic",
    phone: "(555) 123-4567",
    email: "info@visionclinic.com",
    address: "123 Medical Plaza, Suite 456",
    city: "New York",
    state: "NY",
    zipCode: "10001",
    hours: {
      monday: "9:00 AM - 5:00 PM",
      tuesday: "9:00 AM - 5:00 PM",
      wednesday: "9:00 AM - 5:00 PM",
      thursday: "9:00 AM - 5:00 PM",
      friday: "9:00 AM - 3:00 PM",
      saturday: "Closed",
      sunday: "Closed"
    }
  });

  const [activityLogs, setActivityLogs] = useState<ActivityLog[]>([
    {
      id: "log-001",
      user: "doctor@clinic.com",
      action: "Login",
      timestamp: "2025-10-29 09:15:23",
      ipAddress: "192.168.1.100",
      details: "Successful login from desktop"
    },
    {
      id: "log-002",
      user: "customer@clinic.com",
      action: "Appointment Booked",
      timestamp: "2025-10-29 08:45:12",
      ipAddress: "192.168.1.105",
      details: "Booked appointment for Oct 30, 2025"
    },
    {
      id: "log-003",
      user: "admin@clinic.com",
      action: "User Created",
      timestamp: "2025-10-28 14:30:00",
      ipAddress: "192.168.1.101",
      details: "Created new doctor account"
    },
    {
      id: "log-004",
      user: "unknown@email.com",
      action: "Failed Login",
      timestamp: "2025-10-28 03:22:15",
      ipAddress: "45.123.45.67",
      details: "Multiple failed login attempts - SUSPICIOUS"
    }
  ]);

  useEffect(() => {
    const user = localStorage.getItem("currentUser");
    if (user) {
      setCurrentUser(JSON.parse(user));
    } else {
      window.location.hash = "#login";
    }
  }, []);

  const handleToggleUserStatus = (userId: string) => {
    setUsers(prev =>
      prev.map(user =>
        user.id === userId
          ? { ...user, status: user.status === "active" ? "inactive" as const : "active" as const }
          : user
      )
    );
    toast.success("User status updated");
  };

  const handleDeleteUser = (userId: string) => {
    setUsers(prev => prev.filter(user => user.id !== userId));
    toast.success("User deleted successfully");
  };

  const handleResetPassword = (userId: string) => {
    const user = users.find(u => u.id === userId);
    toast.success(`Password reset email sent to ${user?.email}`);
  };

  const handleCreateUser = (formData: any) => {
    toast.success("New user account created");
  };

  const handleCancelAppointment = (appointmentId: string) => {
    setAppointments(prev =>
      prev.map(apt =>
        apt.id === appointmentId ? { ...apt, status: "cancelled" as const } : apt
      )
    );
    toast.success("Appointment cancelled");
  };

  const handlePublishArticle = (articleId: string) => {
    setNewsArticles(prev =>
      prev.map(article =>
        article.id === articleId ? { ...article, status: "published" as const } : article
      )
    );
    toast.success("Article published");
  };

  const handleDeleteArticle = (articleId: string) => {
    setNewsArticles(prev => prev.filter(article => article.id !== articleId));
    toast.success("Article deleted");
  };

  const handleSaveArticle = (isDraft: boolean) => {
    const newArticle: NewsArticle = {
      id: editingArticle?.id || `article-${Date.now()}`,
      ...articleForm,
      date: editingArticle?.date || new Date().toISOString().split('T')[0],
      status: isDraft ? "draft" : "published"
    };

    if (editingArticle) {
      setNewsArticles(prev => prev.map(a => a.id === editingArticle.id ? newArticle : a));
      toast.success("Article updated successfully");
    } else {
      setNewsArticles(prev => [...prev, newArticle]);
      toast.success(isDraft ? "Article saved as draft" : "Article published");
    }

    setIsArticleDialogOpen(false);
    setEditingArticle(null);
    setArticleForm({
      title: "",
      excerpt: "",
      author: "",
      authorBio: "",
      category: "Eye Health",
      image: "",
      readTime: "5 min read",
      content: ""
    });
  };

  const handleEditArticle = (article: NewsArticle) => {
    setEditingArticle(article);
    setArticleForm({
      title: article.title,
      excerpt: article.excerpt,
      author: article.author,
      authorBio: article.authorBio || "",
      category: article.category,
      image: article.image,
      readTime: article.readTime,
      content: article.content
    });
    setIsArticleDialogOpen(true);
  };

  const handleToggleBanner = (bannerId: string) => {
    setBannerSlides(prev =>
      prev.map(banner =>
        banner.id === bannerId ? { ...banner, active: !banner.active } : banner
      )
    );
    toast.success("Banner updated");
  };

  const handleSaveBanner = () => {
    const newBanner: BannerSlide = {
      id: editingBanner?.id || `banner-${Date.now()}`,
      ...bannerForm,
      active: true
    };

    if (editingBanner) {
      setBannerSlides(prev => prev.map(b => b.id === editingBanner.id ? newBanner : b));
      toast.success("Banner updated successfully");
    } else {
      setBannerSlides(prev => [...prev, newBanner]);
      toast.success("Banner created successfully");
    }

    setIsBannerDialogOpen(false);
    setEditingBanner(null);
    setBannerForm({
      title: "",
      subtitle: "",
      buttonText: "",
      buttonLink: "",
      image: "",
      category: "home",
      order: bannerSlides.length + 1,
      newsId: ""
    });
  };

  const handleEditBanner = (banner: BannerSlide) => {
    setEditingBanner(banner);
    setBannerForm({
      title: banner.title,
      subtitle: banner.subtitle,
      buttonText: banner.buttonText,
      buttonLink: banner.buttonLink,
      image: banner.image,
      category: banner.category,
      order: banner.order,
      newsId: banner.newsId || ""
    });
    setIsBannerDialogOpen(true);
  };

  const handleDeleteBanner = (bannerId: string) => {
    setBannerSlides(prev => prev.filter(b => b.id !== bannerId));
    toast.success("Banner deleted");
  };

  const handleToggleService = (serviceId: string) => {
    setServices(prev =>
      prev.map(service =>
        service.id === serviceId
          ? { ...service, status: service.status === "active" ? "inactive" as const : "active" as const }
          : service
      )
    );
    toast.success("Service status updated");
  };

  const handleSaveService = () => {
    const newService: Service = {
      id: editingService?.id || `service-${Date.now()}`,
      ...serviceForm,
      status: "active",
      order: editingService?.order || services.length + 1
    };

    if (editingService) {
      setServices(prev => prev.map(s => s.id === editingService.id ? newService : s));
      toast.success("Service updated successfully");
    } else {
      setServices(prev => [...prev, newService]);
      toast.success("Service created successfully");
    }

    setIsServiceDialogOpen(false);
    setEditingService(null);
    setServiceForm({
      title: "",
      description: "",
      image: "",
      features: ["", "", "", ""],
      icon: "Eye"
    });
  };

  const handleEditService = (service: Service) => {
    setEditingService(service);
    setServiceForm({
      title: service.title,
      description: service.description,
      image: service.image,
      features: service.features,
      icon: service.icon
    });
    setIsServiceDialogOpen(true);
  };

  const handleDeleteService = (serviceId: string) => {
    setServices(prev => prev.filter(s => s.id !== serviceId));
    toast.success("Service deleted");
  };

  const handleUpdateClinicInfo = () => {
    toast.success("Clinic information updated");
  };

  if (!currentUser) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-blue-900 mb-2">Admin Dashboard</h1>
          <p className="text-gray-600">
            Welcome back, {currentUser.firstName} {currentUser.lastName}
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm">Total Users</p>
                  <p className="text-blue-900 mt-1">{users.length}</p>
                </div>
                <Users className="h-8 w-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm">Appointments Today</p>
                  <p className="text-blue-900 mt-1">
                    {appointments.filter(apt => apt.date === new Date().toISOString().split('T')[0]).length}
                  </p>
                </div>
                <Calendar className="h-8 w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm">Published Articles</p>
                  <p className="text-blue-900 mt-1">
                    {newsArticles.filter(article => article.status === "published").length}
                  </p>
                </div>
                <FileText className="h-8 w-8 text-purple-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm">Active Services</p>
                  <p className="text-blue-900 mt-1">
                    {services.filter(s => s.status === "active").length}
                  </p>
                </div>
                <Settings className="h-8 w-8 text-orange-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="mb-6 flex-wrap h-auto">
            <TabsTrigger value="users">User Management</TabsTrigger>
            <TabsTrigger value="appointments">Appointments</TabsTrigger>
            <TabsTrigger value="news">News & Events</TabsTrigger>
            <TabsTrigger value="services">Services</TabsTrigger>
            <TabsTrigger value="banners">Homepage Banners</TabsTrigger>
            <TabsTrigger value="clinic">Clinic Info</TabsTrigger>
            <TabsTrigger value="logs">Activity Logs</TabsTrigger>
          </TabsList>

          {/* User Management Tab */}
          <TabsContent value="users">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>User Management</CardTitle>
                    <CardDescription>
                      Create and manage user accounts, roles, and permissions
                    </CardDescription>
                  </div>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button>
                        <Plus className="h-4 w-4 mr-2" />
                        Create User
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Create New User</DialogTitle>
                        <DialogDescription>
                          Add a new user account to the system
                        </DialogDescription>
                      </DialogHeader>
                      <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <Label>First Name</Label>
                            <Input placeholder="John" />
                          </div>
                          <div>
                            <Label>Last Name</Label>
                            <Input placeholder="Doe" />
                          </div>
                        </div>
                        <div>
                          <Label>Email</Label>
                          <Input type="email" placeholder="user@email.com" />
                        </div>
                        <div>
                          <Label>Phone</Label>
                          <Input placeholder="(555) 123-4567" />
                        </div>
                        <div>
                          <Label>Role</Label>
                          <Select defaultValue="customer">
                            <SelectTrigger>
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="customer">Customer</SelectItem>
                              <SelectItem value="doctor">Doctor</SelectItem>
                              <SelectItem value="admin">Admin</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <Label>Password</Label>
                          <div className="relative">
                            <Input
                              type={showPassword ? "text" : "password"}
                              placeholder="Create password"
                            />
                            <button
                              type="button"
                              onClick={() => setShowPassword(!showPassword)}
                              className="absolute right-3 top-1/2 -translate-y-1/2"
                            >
                              {showPassword ? (
                                <EyeOff className="h-4 w-4 text-gray-400" />
                              ) : (
                                <Eye className="h-4 w-4 text-gray-400" />
                              )}
                            </button>
                          </div>
                        </div>
                      </div>
                      <DialogFooter>
                        <Button onClick={() => handleCreateUser({})}>Create User</Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                </div>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Role</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Last Login</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {users.map((user) => (
                      <TableRow key={user.id}>
                        <TableCell>
                          {user.firstName} {user.lastName}
                        </TableCell>
                        <TableCell>{user.email}</TableCell>
                        <TableCell>
                          <Badge variant={user.role === "admin" ? "default" : "secondary"}>
                            {user.role}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Switch
                              checked={user.status === "active"}
                              onCheckedChange={() => handleToggleUserStatus(user.id)}
                            />
                            <span className="text-sm">
                              {user.status === "active" ? "Active" : "Inactive"}
                            </span>
                          </div>
                        </TableCell>
                        <TableCell>{new Date(user.lastLogin).toLocaleDateString()}</TableCell>
                        <TableCell>
                          <div className="flex gap-2">
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => handleResetPassword(user.id)}
                            >
                              <RotateCcw className="h-4 w-4" />
                            </Button>
                            <Dialog>
                              <DialogTrigger asChild>
                                <Button size="sm" variant="outline">
                                  <Edit className="h-4 w-4" />
                                </Button>
                              </DialogTrigger>
                              <DialogContent>
                                <DialogHeader>
                                  <DialogTitle>Edit User</DialogTitle>
                                </DialogHeader>
                                <div className="space-y-4">
                                  <div className="grid grid-cols-2 gap-4">
                                    <div>
                                      <Label>First Name</Label>
                                      <Input defaultValue={user.firstName} />
                                    </div>
                                    <div>
                                      <Label>Last Name</Label>
                                      <Input defaultValue={user.lastName} />
                                    </div>
                                  </div>
                                  <div>
                                    <Label>Email</Label>
                                    <Input defaultValue={user.email} />
                                  </div>
                                  <div>
                                    <Label>Phone</Label>
                                    <Input defaultValue={user.phone} />
                                  </div>
                                  <div>
                                    <Label>Role</Label>
                                    <Select defaultValue={user.role}>
                                      <SelectTrigger>
                                        <SelectValue />
                                      </SelectTrigger>
                                      <SelectContent>
                                        <SelectItem value="customer">Customer</SelectItem>
                                        <SelectItem value="doctor">Doctor</SelectItem>
                                        <SelectItem value="admin">Admin</SelectItem>
                                      </SelectContent>
                                    </Select>
                                  </div>
                                </div>
                                <DialogFooter>
                                  <Button>Save Changes</Button>
                                </DialogFooter>
                              </DialogContent>
                            </Dialog>
                            <Button
                              size="sm"
                              variant="destructive"
                              onClick={() => handleDeleteUser(user.id)}
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Appointments Tab */}
          <TabsContent value="appointments">
            <Card>
              <CardHeader>
                <CardTitle>All Appointments</CardTitle>
                <CardDescription>
                  View and manage all clinic appointments
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Patient</TableHead>
                      <TableHead>Doctor</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Time</TableHead>
                      <TableHead>Service</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {appointments.map((appointment) => (
                      <TableRow key={appointment.id}>
                        <TableCell>{appointment.patientName}</TableCell>
                        <TableCell>{appointment.doctorName}</TableCell>
                        <TableCell>{new Date(appointment.date).toLocaleDateString()}</TableCell>
                        <TableCell>{appointment.time}</TableCell>
                        <TableCell>{appointment.service}</TableCell>
                        <TableCell>
                          <Badge
                            variant={
                              appointment.status === "completed"
                                ? "default"
                                : appointment.status === "cancelled"
                                ? "destructive"
                                : "secondary"
                            }
                          >
                            {appointment.status}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex gap-2">
                            {appointment.status === "scheduled" && (
                              <>
                                <Dialog>
                                  <DialogTrigger asChild>
                                    <Button size="sm" variant="outline">
                                      <Edit className="h-4 w-4" />
                                    </Button>
                                  </DialogTrigger>
                                  <DialogContent>
                                    <DialogHeader>
                                      <DialogTitle>Edit Appointment</DialogTitle>
                                    </DialogHeader>
                                    <div className="space-y-4">
                                      <div>
                                        <Label>Date</Label>
                                        <Input type="date" defaultValue={appointment.date} />
                                      </div>
                                      <div>
                                        <Label>Time</Label>
                                        <Input type="time" />
                                      </div>
                                      <div>
                                        <Label>Service</Label>
                                        <Select defaultValue={appointment.service}>
                                          <SelectTrigger>
                                            <SelectValue />
                                          </SelectTrigger>
                                          <SelectContent>
                                            <SelectItem value="Comprehensive Eye Exam">
                                              Comprehensive Eye Exam
                                            </SelectItem>
                                            <SelectItem value="Contact Lens Fitting">
                                              Contact Lens Fitting
                                            </SelectItem>
                                            <SelectItem value="Follow-up Visit">
                                              Follow-up Visit
                                            </SelectItem>
                                          </SelectContent>
                                        </Select>
                                      </div>
                                    </div>
                                    <DialogFooter>
                                      <Button>Save Changes</Button>
                                    </DialogFooter>
                                  </DialogContent>
                                </Dialog>
                                <Button
                                  size="sm"
                                  variant="destructive"
                                  onClick={() => handleCancelAppointment(appointment.id)}
                                >
                                  <XCircle className="h-4 w-4" />
                                </Button>
                              </>
                            )}
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          {/* News & Events Tab with Enhanced Article Dialog */}
          <TabsContent value="news">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>News & Events</CardTitle>
                    <CardDescription>
                      Create and manage clinic news, events, and promotions
                    </CardDescription>
                  </div>
                  <Button onClick={() => {
                    setEditingArticle(null);
                    setArticleForm({
                      title: "",
                      excerpt: "",
                      author: "",
                      authorBio: "",
                      category: "Eye Health",
                      image: "",
                      readTime: "5 min read",
                      content: ""
                    });
                    setIsArticleDialogOpen(true);
                  }}>
                    <Plus className="h-4 w-4 mr-2" />
                    Create Article
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {newsArticles.map((article) => (
                    <Card key={article.id}>
                      <CardContent className="p-4">
                        <div className="flex items-start gap-4">
                          <div className="w-32 h-20 bg-gray-200 rounded-lg overflow-hidden flex-shrink-0">
                            {article.image && (
                              <img src={article.image} alt={article.title} className="w-full h-full object-cover" />
                            )}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <h3 className="text-gray-900">{article.title}</h3>
                              <Badge variant={article.status === "published" ? "default" : "secondary"}>
                                {article.status}
                              </Badge>
                              <Badge variant="outline">{article.category}</Badge>
                            </div>
                            <p className="text-sm text-gray-600 mb-2">{article.excerpt}</p>
                            <div className="flex gap-4 text-xs text-gray-500">
                              <span>By {article.author}</span>
                              <span>{article.readTime}</span>
                              <span>{new Date(article.date).toLocaleDateString()}</span>
                            </div>
                          </div>
                          <div className="flex gap-2">
                            <Button size="sm" variant="outline" onClick={() => handleEditArticle(article)}>
                              <Edit className="h-4 w-4" />
                            </Button>
                            {article.status === "draft" && (
                              <Button
                                size="sm"
                                onClick={() => handlePublishArticle(article.id)}
                                className="bg-green-600 hover:bg-green-700"
                              >
                                <CheckCircle className="h-4 w-4" />
                              </Button>
                            )}
                            <Button
                              size="sm"
                              variant="destructive"
                              onClick={() => handleDeleteArticle(article.id)}
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Services Tab */}
          <TabsContent value="services">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Services Management</CardTitle>
                    <CardDescription>
                      Add, update, or disable clinic services
                    </CardDescription>
                  </div>
                  <Button onClick={() => {
                    setEditingService(null);
                    setServiceForm({
                      title: "",
                      description: "",
                      image: "",
                      features: ["", "", "", ""],
                      icon: "Eye"
                    });
                    setIsServiceDialogOpen(true);
                  }}>
                    <Plus className="h-4 w-4 mr-2" />
                    Add Service
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {services.map((service) => (
                    <Card key={service.id}>
                      <CardContent className="p-4">
                        <div className="flex items-start gap-4">
                          <div className="w-32 h-20 bg-gray-200 rounded-lg overflow-hidden flex-shrink-0">
                            {service.image && (
                              <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
                            )}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <h3 className="text-gray-900">{service.title}</h3>
                              <Badge variant={service.status === "active" ? "default" : "secondary"}>
                                {service.status}
                              </Badge>
                              <Badge variant="outline">Order: {service.order}</Badge>
                            </div>
                            <p className="text-sm text-gray-600 mb-2">{service.description}</p>
                            <div className="flex flex-wrap gap-2">
                              {service.features.map((feature, idx) => (
                                <span key={idx} className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded">
                                  {feature}
                                </span>
                              ))}
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="flex items-center gap-2">
                              <Switch
                                checked={service.status === "active"}
                                onCheckedChange={() => handleToggleService(service.id)}
                              />
                              <span className="text-sm whitespace-nowrap">
                                {service.status === "active" ? "Active" : "Inactive"}
                              </span>
                            </div>
                            <Button size="sm" variant="outline" onClick={() => handleEditService(service)}>
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button
                              size="sm"
                              variant="destructive"
                              onClick={() => handleDeleteService(service.id)}
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Homepage Banners Tab */}
          <TabsContent value="banners">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Homepage Banner Management</CardTitle>
                    <CardDescription>
                      Manage hero section carousel slides
                    </CardDescription>
                  </div>
                  <Button onClick={() => {
                    setEditingBanner(null);
                    setBannerForm({
                      title: "",
                      subtitle: "",
                      buttonText: "",
                      buttonLink: "",
                      image: "",
                      category: "home",
                      order: bannerSlides.length + 1,
                      newsId: ""
                    });
                    setIsBannerDialogOpen(true);
                  }}>
                    <Plus className="h-4 w-4 mr-2" />
                    Add Banner
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {bannerSlides.map((banner) => (
                    <Card key={banner.id}>
                      <CardContent className="p-4">
                        <div className="flex items-start gap-4">
                          <div className="w-32 h-20 bg-gray-200 rounded-lg overflow-hidden flex-shrink-0">
                            {banner.image ? (
                              <img src={banner.image} alt={banner.title} className="w-full h-full object-cover" />
                            ) : (
                              <div className="w-full h-full flex items-center justify-center">
                                <ImageIcon className="h-8 w-8 text-gray-400" />
                              </div>
                            )}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <h3 className="text-gray-900">{banner.title}</h3>
                              <Badge variant="outline">Order: {banner.order}</Badge>
                              <Badge>{banner.category}</Badge>
                            </div>
                            <p className="text-sm text-gray-600 mb-2 line-clamp-2">{banner.subtitle}</p>
                            <div className="flex gap-4 text-xs text-gray-500">
                              <span>Button: {banner.buttonText}</span>
                              <span>Link: {banner.buttonLink}</span>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="flex items-center gap-2">
                              <Switch
                                checked={banner.active}
                                onCheckedChange={() => handleToggleBanner(banner.id)}
                              />
                              <span className="text-sm whitespace-nowrap">
                                {banner.active ? "Active" : "Inactive"}
                              </span>
                            </div>
                            <Button size="sm" variant="outline" onClick={() => handleEditBanner(banner)}>
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button
                              size="sm"
                              variant="destructive"
                              onClick={() => handleDeleteBanner(banner.id)}
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Clinic Info Tab */}
          <TabsContent value="clinic">
            <Card>
              <CardHeader>
                <CardTitle>Clinic Information</CardTitle>
                <CardDescription>
                  Update clinic details, hours, and contact information
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label>Clinic Name</Label>
                      <Input value={clinicInfo.name} />
                    </div>
                    <div>
                      <Label>Phone</Label>
                      <Input value={clinicInfo.phone} />
                    </div>
                    <div>
                      <Label>Email</Label>
                      <Input value={clinicInfo.email} />
                    </div>
                    <div>
                      <Label>Address</Label>
                      <Input value={clinicInfo.address} />
                    </div>
                    <div>
                      <Label>City</Label>
                      <Input value={clinicInfo.city} />
                    </div>
                    <div>
                      <Label>State</Label>
                      <Input value={clinicInfo.state} />
                    </div>
                    <div>
                      <Label>Zip Code</Label>
                      <Input value={clinicInfo.zipCode} />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-gray-900 mb-4">Operating Hours</h3>
                    <div className="space-y-3">
                      {Object.entries(clinicInfo.hours).map(([day, hours]) => (
                        <div key={day} className="grid grid-cols-3 gap-4 items-center">
                          <Label className="capitalize">{day}</Label>
                          <Input className="col-span-2" value={hours} />
                        </div>
                      ))}
                    </div>
                  </div>

                  <Button onClick={handleUpdateClinicInfo}>
                    <Settings className="h-4 w-4 mr-2" />
                    Update Clinic Information
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Activity Logs Tab */}
          <TabsContent value="logs">
            <Card>
              <CardHeader>
                <CardTitle>Activity Logs</CardTitle>
                <CardDescription>
                  Monitor user activity and security events
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>User</TableHead>
                      <TableHead>Action</TableHead>
                      <TableHead>Timestamp</TableHead>
                      <TableHead>IP Address</TableHead>
                      <TableHead>Details</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {activityLogs.map((log) => (
                      <TableRow
                        key={log.id}
                        className={log.details.includes("SUSPICIOUS") ? "bg-red-50" : ""}
                      >
                        <TableCell>{log.user}</TableCell>
                        <TableCell>
                          <Badge variant={log.action.includes("Failed") ? "destructive" : "secondary"}>
                            {log.action}
                          </Badge>
                        </TableCell>
                        <TableCell>{log.timestamp}</TableCell>
                        <TableCell className="font-mono text-sm">{log.ipAddress}</TableCell>
                        <TableCell>
                          {log.details.includes("SUSPICIOUS") ? (
                            <span className="text-red-600 flex items-center gap-2">
                              <Shield className="h-4 w-4" />
                              {log.details}
                            </span>
                          ) : (
                            log.details
                          )}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      {/* Article Dialog */}
      <Dialog open={isArticleDialogOpen} onOpenChange={setIsArticleDialogOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh]">
          <DialogHeader>
            <DialogTitle>{editingArticle ? "Edit Article" : "Create News Article"}</DialogTitle>
            <DialogDescription>
              Create engaging content for your clinic's news section
            </DialogDescription>
          </DialogHeader>
          <ScrollArea className="max-h-[calc(90vh-180px)] pr-4">
            <div className="space-y-4">
              <div>
                <Label>Title *</Label>
                <Input
                  placeholder="Enter article title"
                  value={articleForm.title}
                  onChange={(e) => setArticleForm({ ...articleForm, title: e.target.value })}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label>Category *</Label>
                  <Select value={articleForm.category} onValueChange={(value) => setArticleForm({ ...articleForm, category: value })}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Eye Health">Eye Health</SelectItem>
                      <SelectItem value="Technology">Technology</SelectItem>
                      <SelectItem value="Tips & Advice">Tips & Advice</SelectItem>
                      <SelectItem value="Pediatric Care">Pediatric Care</SelectItem>
                      <SelectItem value="Prevention">Prevention</SelectItem>
                      <SelectItem value="Style Guide">Style Guide</SelectItem>
                      <SelectItem value="Events">Events</SelectItem>
                      <SelectItem value="Promotions">Promotions</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label>Read Time</Label>
                  <Input
                    placeholder="e.g., 5 min read"
                    value={articleForm.readTime}
                    onChange={(e) => setArticleForm({ ...articleForm, readTime: e.target.value })}
                  />
                </div>
              </div>

              <div>
                <Label>Excerpt / Summary *</Label>
                <Textarea
                  placeholder="Brief summary that appears on article cards (2-3 sentences)"
                  rows={3}
                  value={articleForm.excerpt}
                  onChange={(e) => setArticleForm({ ...articleForm, excerpt: e.target.value })}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label>Author Name *</Label>
                  <Input
                    placeholder="e.g., Dr. Sarah Mitchell"
                    value={articleForm.author}
                    onChange={(e) => setArticleForm({ ...articleForm, author: e.target.value })}
                  />
                </div>
                <div>
                  <Label>Author Bio (Optional)</Label>
                  <Input
                    placeholder="Brief author credentials"
                    value={articleForm.authorBio}
                    onChange={(e) => setArticleForm({ ...articleForm, authorBio: e.target.value })}
                  />
                </div>
              </div>

              <div>
                <Label>Featured Image *</Label>
                <div className="space-y-2">
                  <Input
                    placeholder="https://images.unsplash.com/..."
                    value={articleForm.image}
                    onChange={(e) => setArticleForm({ ...articleForm, image: e.target.value })}
                  />
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                    <Upload className="h-8 w-8 mx-auto mb-2 text-gray-400" />
                    <p className="text-sm text-gray-600 mb-2">
                      Upload article featured image
                    </p>
                    <p className="text-xs text-gray-500 mb-3">
                      Recommended size: 1200x630px
                    </p>
                    <Button variant="outline" size="sm" type="button">
                      Choose Image
                    </Button>
                  </div>
                  {articleForm.image && (
                    <div className="mt-2">
                      <img src={articleForm.image} alt="Preview" className="w-full h-48 object-cover rounded-lg" />
                    </div>
                  )}
                </div>
              </div>

              <div>
                <Label>Article Content (HTML) *</Label>
                <Textarea
                  placeholder="Enter full article content with HTML formatting:
<h2>Section Heading</h2>
<p>Paragraph text goes here...</p>
<ul>
  <li>List item 1</li>
  <li>List item 2</li>
</ul>
<p>More content...</p>"
                  rows={15}
                  className="font-mono text-sm"
                  value={articleForm.content}
                  onChange={(e) => setArticleForm({ ...articleForm, content: e.target.value })}
                />
                <p className="text-xs text-gray-500 mt-1">
                  Supported HTML tags: h2, h3, p, ul, ol, li, strong, em, a
                </p>
              </div>

              <div className="border-t pt-4">
                <Label className="mb-2 block">Additional Images for Article Body (Optional)</Label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                  <Upload className="h-8 w-8 mx-auto mb-2 text-gray-400" />
                  <p className="text-sm text-gray-600 mb-2">
                    Upload images to use within article content
                  </p>
                  <Button variant="outline" size="sm" type="button">
                    Add Images
                  </Button>
                </div>
              </div>
            </div>
          </ScrollArea>
          <DialogFooter>
            <Button variant="outline" onClick={() => handleSaveArticle(true)}>
              Save as Draft
            </Button>
            <Button onClick={() => handleSaveArticle(false)}>
              Publish Article
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Banner Dialog */}
      <Dialog open={isBannerDialogOpen} onOpenChange={setIsBannerDialogOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>{editingBanner ? "Edit Banner" : "Create Homepage Banner"}</DialogTitle>
            <DialogDescription>
              Configure hero carousel slide for homepage
            </DialogDescription>
          </DialogHeader>
          <ScrollArea className="max-h-[calc(90vh-180px)] pr-4">
            <div className="space-y-4">
              <div>
                <Label>Main Title *</Label>
                <Input
                  placeholder="e.g., Comprehensive Eye Care Services"
                  value={bannerForm.title}
                  onChange={(e) => setBannerForm({ ...bannerForm, title: e.target.value })}
                />
              </div>

              <div>
                <Label>Subtitle Text *</Label>
                <Textarea
                  placeholder="Supporting text that appears below the main title"
                  rows={3}
                  value={bannerForm.subtitle}
                  onChange={(e) => setBannerForm({ ...bannerForm, subtitle: e.target.value })}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label>Button Text *</Label>
                  <Input
                    placeholder="e.g., Book An Appointment"
                    value={bannerForm.buttonText}
                    onChange={(e) => setBannerForm({ ...bannerForm, buttonText: e.target.value })}
                  />
                </div>
                <div>
                  <Label>Button URL *</Label>
                  <Input
                    placeholder="e.g., #appointment"
                    value={bannerForm.buttonLink}
                    onChange={(e) => setBannerForm({ ...bannerForm, buttonLink: e.target.value })}
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label>Category *</Label>
                  <Select value={bannerForm.category} onValueChange={(value: "home" | "news" | "campaign" | "service") => setBannerForm({ ...bannerForm, category: value })}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="home">Home</SelectItem>
                      <SelectItem value="news">Latest News</SelectItem>
                      <SelectItem value="campaign">Campaign</SelectItem>
                      <SelectItem value="service">Service</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label>Display Order</Label>
                  <Input
                    type="number"
                    min="1"
                    value={bannerForm.order}
                    onChange={(e) => setBannerForm({ ...bannerForm, order: parseInt(e.target.value) || 1 })}
                  />
                </div>
              </div>

              {bannerForm.category === "news" && (
                <div>
                  <Label>Link to News Article (Optional)</Label>
                  <Select value={bannerForm.newsId} onValueChange={(value) => {
                    const article = newsArticles.find(a => a.id === value);
                    if (article) {
                      setBannerForm({
                        ...bannerForm,
                        newsId: value,
                        buttonLink: `#article?id=${value}`,
                        title: article.title,
                        subtitle: article.excerpt,
                        image: article.image
                      });
                    }
                  }}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select article to link" />
                    </SelectTrigger>
                    <SelectContent>
                      {newsArticles.map(article => (
                        <SelectItem key={article.id} value={article.id}>
                          {article.title}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              )}

              <div>
                <Label>Banner Image *</Label>
                <div className="space-y-2">
                  <Input
                    placeholder="https://images.unsplash.com/..."
                    value={bannerForm.image}
                    onChange={(e) => setBannerForm({ ...bannerForm, image: e.target.value })}
                  />
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                    <Upload className="h-8 w-8 mx-auto mb-2 text-gray-400" />
                    <p className="text-sm text-gray-600 mb-2">
                      Upload banner background image
                    </p>
                    <p className="text-xs text-gray-500 mb-3">
                      Recommended size: 1920x600px
                    </p>
                    <Button variant="outline" size="sm" type="button">
                      Choose Image
                    </Button>
                  </div>
                  {bannerForm.image && (
                    <div className="mt-2">
                      <img src={bannerForm.image} alt="Preview" className="w-full h-32 object-cover rounded-lg" />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </ScrollArea>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsBannerDialogOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleSaveBanner}>
              {editingBanner ? "Update Banner" : "Create Banner"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Service Dialog */}
      <Dialog open={isServiceDialogOpen} onOpenChange={setIsServiceDialogOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>{editingService ? "Edit Service" : "Add New Service"}</DialogTitle>
            <DialogDescription>
              Configure service details for services page
            </DialogDescription>
          </DialogHeader>
          <ScrollArea className="max-h-[calc(90vh-180px)] pr-4">
            <div className="space-y-4">
              <div>
                <Label>Service Title *</Label>
                <Input
                  placeholder="e.g., Comprehensive Eye Exams"
                  value={serviceForm.title}
                  onChange={(e) => setServiceForm({ ...serviceForm, title: e.target.value })}
                />
              </div>

              <div>
                <Label>Description *</Label>
                <Textarea
                  placeholder="Detailed description of the service"
                  rows={4}
                  value={serviceForm.description}
                  onChange={(e) => setServiceForm({ ...serviceForm, description: e.target.value })}
                />
              </div>

              <div>
                <Label>Icon Name</Label>
                <Select value={serviceForm.icon} onValueChange={(value) => setServiceForm({ ...serviceForm, icon: value })}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Eye">Eye</SelectItem>
                    <SelectItem value="Glasses">Glasses</SelectItem>
                    <SelectItem value="TestTube">Test Tube</SelectItem>
                    <SelectItem value="Zap">Zap (LASIK)</SelectItem>
                    <SelectItem value="Stethoscope">Stethoscope</SelectItem>
                    <SelectItem value="Heart">Heart</SelectItem>
                    <SelectItem value="Shield">Shield</SelectItem>
                    <SelectItem value="Activity">Activity</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label>Key Features (4 items)</Label>
                <div className="space-y-2">
                  {serviceForm.features.map((feature, idx) => (
                    <Input
                      key={idx}
                      placeholder={`Feature ${idx + 1}`}
                      value={feature}
                      onChange={(e) => {
                        const newFeatures = [...serviceForm.features];
                        newFeatures[idx] = e.target.value;
                        setServiceForm({ ...serviceForm, features: newFeatures });
                      }}
                    />
                  ))}
                </div>
              </div>

              <div>
                <Label>Service Image *</Label>
                <div className="space-y-2">
                  <Input
                    placeholder="https://images.unsplash.com/..."
                    value={serviceForm.image}
                    onChange={(e) => setServiceForm({ ...serviceForm, image: e.target.value })}
                  />
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                    <Upload className="h-8 w-8 mx-auto mb-2 text-gray-400" />
                    <p className="text-sm text-gray-600 mb-2">
                      Upload service image
                    </p>
                    <p className="text-xs text-gray-500 mb-3">
                      Recommended size: 800x600px
                    </p>
                    <Button variant="outline" size="sm" type="button">
                      Choose Image
                    </Button>
                  </div>
                  {serviceForm.image && (
                    <div className="mt-2">
                      <img src={serviceForm.image} alt="Preview" className="w-full h-32 object-cover rounded-lg" />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </ScrollArea>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsServiceDialogOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleSaveService}>
              {editingService ? "Update Service" : "Add Service"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
