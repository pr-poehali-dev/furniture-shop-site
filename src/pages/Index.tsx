import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [cartCount, setCartCount] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('popular');
  const [priceRange, setPriceRange] = useState({ min: 0, max: 10000 });
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);

  const addToCart = () => {
    setCartCount(prev => prev + 1);
  };

  const allProducts = [
    {
      id: 1,
      title: 'Петля накладная Blum CLIP top BLUMOTION',
      description: 'Петля с доводчиком для накладных дверей',
      image: '/img/06c5a24b-2d35-4a0c-91ad-adeb176ad464.jpg',
      price: 850,
      category: 'hinges',
      brand: 'Blum',
      popular: true,
      inStock: true,
      rating: 4.8,
      reviews: 124,
      specs: {
        material: 'Сталь',
        finish: 'Никелированное покрытие',
        weight: '45г',
        opening: '110°'
      }
    },
    {
      id: 2,
      title: 'Ручка-скоба матовый хром 128мм',
      description: 'Современная ручка для кухонных фасадов',
      image: '/img/22245ba0-893d-48c6-b3ce-301c8f9e259c.jpg',
      price: 320,
      category: 'handles',
      brand: 'Hafele',
      popular: false,
      inStock: true,
      rating: 4.6,
      reviews: 89,
      specs: {
        material: 'Алюминий',
        finish: 'Матовый хром',
        length: '128мм',
        mounting: 'На винты'
      }
    },
    {
      id: 3,
      title: 'Направляющие полного выдвижения 500мм',
      description: 'Шариковые направляющие с доводчиком',
      image: '/img/91ac07ba-78cb-436a-af80-65049628ca26.jpg',
      price: 450,
      category: 'slides',
      brand: 'Hettich',
      popular: true,
      inStock: true,
      rating: 4.9,
      reviews: 201,
      specs: {
        material: 'Сталь',
        length: '500мм',
        load: '40кг',
        type: 'Полное выдвижение'
      }
    },
    {
      id: 4,
      title: 'Замок мебельный с ключом',
      description: 'Врезной замок для ящиков и шкафов',
      image: '/img/5f0e7c78-0f6d-4187-af92-27f71592d04d.jpg',
      price: 180,
      category: 'locks',
      brand: 'FGV',
      popular: false,
      inStock: true,
      rating: 4.4,
      reviews: 67,
      specs: {
        material: 'Латунь',
        type: 'Врезной',
        keys: '2 ключа',
        size: '22x16мм'
      }
    },
    {
      id: 5,
      title: 'Крепеж конфирмат 6.4x50мм (50шт)',
      description: 'Евровинты для сборки мебели',
      image: '/img/cd635416-d6d8-4eb1-a72b-ca6c161a1953.jpg',
      price: 120,
      category: 'fasteners',
      brand: 'EURO',
      popular: true,
      inStock: true,
      rating: 4.5,
      reviews: 156,
      specs: {
        material: 'Сталь оцинкованная',
        size: '6.4x50мм',
        head: 'Под шестигранник',
        quantity: '50шт'
      }
    },
    {
      id: 6,
      title: 'Петля полунакладная с доводчиком',
      description: 'Петля для полунакладных дверей шкафов',
      image: '/img/06c5a24b-2d35-4a0c-91ad-adeb176ad464.jpg',
      price: 690,
      category: 'hinges',
      brand: 'Blum',
      popular: false,
      inStock: true,
      rating: 4.7,
      reviews: 93,
      specs: {
        material: 'Сталь',
        finish: 'Никелированное покрытие',
        weight: '42г',
        opening: '107°'
      }
    }
  ];

  const categories = [
    { value: 'all', label: 'Все категории' },
    { value: 'hinges', label: 'Петли и навесы' },
    { value: 'handles', label: 'Ручки и кнопки' },
    { value: 'slides', label: 'Направляющие' },
    { value: 'locks', label: 'Замки' },
    { value: 'fasteners', label: 'Крепеж' }
  ];

  const brands = ['Blum', 'Hafele', 'Hettich', 'FGV', 'EURO'];

  const filteredProducts = allProducts.filter(product => {
    const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesPrice = product.price >= priceRange.min && product.price <= priceRange.max;
    const matchesBrand = selectedBrands.length === 0 || selectedBrands.includes(product.brand);
    
    return matchesSearch && matchesCategory && matchesPrice && matchesBrand;
  }).sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'name':
        return a.title.localeCompare(b.title);
      case 'rating':
        return b.rating - a.rating;
      default: // popular
        return b.popular ? 1 : -1;
    }
  });

  const toggleBrand = (brand: string) => {
    setSelectedBrands(prev => 
      prev.includes(brand) 
        ? prev.filter(b => b !== brand)
        : [...prev, brand]
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-orange-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-blue-500 rounded-lg flex items-center justify-center">
                <Icon name="Wrench" size={20} className="text-white" />
              </div>
              <h1 className="text-xl font-bold text-gray-900">МебельФурнитура</h1>
            </div>
            
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#catalog" className="text-gray-700 hover:text-orange-500 transition-colors">Каталог</a>
              <a href="#delivery" className="text-gray-700 hover:text-orange-500 transition-colors">Доставка</a>
              <a href="#about" className="text-gray-700 hover:text-orange-500 transition-colors">О компании</a>
              <a href="#contacts" className="text-gray-700 hover:text-orange-500 transition-colors">Контакты</a>
            </nav>
            
            <Button className="relative bg-orange-500 hover:bg-orange-600 text-white">
              <Icon name="ShoppingCart" size={20} className="mr-2" />
              Корзина
              {cartCount > 0 && (
                <Badge className="absolute -top-2 -right-2 bg-blue-500 text-white min-w-[20px] h-5 rounded-full text-xs flex items-center justify-center">
                  {cartCount}
                </Badge>
              )}
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-gray-900 to-gray-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6 animate-fade-in">
              Качественная <span className="text-orange-400">фурнитура</span> для мебели
            </h1>
            <p className="text-xl mb-8 text-gray-300 max-w-3xl mx-auto animate-fade-in">
              Высокое качество материалов и долговечность — наши главные приоритеты. 
              Профессиональная фурнитура для создания идеальной мебели.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8">
                <Icon name="Search" size={20} className="mr-2" />
                Смотреть каталог
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900">
                <Icon name="Phone" size={20} className="mr-2" />
                Связаться с нами
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center p-6 hover-scale">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Award" size={32} className="text-orange-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Высокое качество</h3>
              <p className="text-gray-600">Используем только премиальные материалы от проверенных производителей</p>
            </div>
            <div className="text-center p-6 hover-scale">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Shield" size={32} className="text-blue-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Долговечность</h3>
              <p className="text-gray-600">Гарантия на всю продукцию до 5 лет, испытано временем</p>
            </div>
            <div className="text-center p-6 hover-scale">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Package" size={32} className="text-green-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Большой выбор</h3>
              <p className="text-gray-600">Более 1000 наименований фурнитуры в наличии на складе</p>
            </div>
            <div className="text-center p-6 hover-scale">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Truck" size={32} className="text-purple-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Быстрая доставка</h3>
              <p className="text-gray-600">Доставим заказ по всей России в течение 1-3 рабочих дней</p>
            </div>
          </div>
        </div>
      </section>

      {/* Visualization Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Визуализация фурнитуры</h2>
            <p className="text-xl text-gray-600">Посмотрите, как устанавливается и работает мебельная фурнитура</p>
          </div>

          {/* Interactive Demo Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* Hinges Demo */}
            <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
              <div className="relative h-64 bg-gradient-to-br from-blue-50 to-blue-100">
                <img 
                  src="/img/1f18520a-c58d-4686-8def-b8417df3f9e5.jpg"
                  alt="Установка петель"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-10 transition-all duration-300"></div>
                <div className="absolute top-4 left-4">
                  <Badge className="bg-blue-500 text-white">
                    <Icon name="Eye" size={14} className="mr-1" />
                    3D Демо
                  </Badge>
                </div>
                <Button 
                  className="absolute bottom-4 right-4 bg-white text-gray-900 hover:bg-gray-100 opacity-0 group-hover:opacity-100 transition-all duration-300"
                  size="sm"
                >
                  <Icon name="Play" size={16} className="mr-2" />
                  Запустить
                </Button>
              </div>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Wrench" size={20} className="text-blue-500" />
                  Петли и навесы
                </CardTitle>
                <CardDescription>
                  Интерактивная демонстрация установки петель на мебель
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <Icon name="CheckCircle" size={16} className="text-green-500" />
                    Пошаговая сборка
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="CheckCircle" size={16} className="text-green-500" />
                    Настройка доводчика
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="CheckCircle" size={16} className="text-green-500" />
                    Тестирование работы
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Slides Demo */}
            <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
              <div className="relative h-64 bg-gradient-to-br from-orange-50 to-orange-100">
                <img 
                  src="/img/5768faa0-2b52-4322-95d2-080f7da27b6b.jpg"
                  alt="Установка направляющих"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-10 transition-all duration-300"></div>
                <div className="absolute top-4 left-4">
                  <Badge className="bg-orange-500 text-white">
                    <Icon name="Settings" size={14} className="mr-1" />
                    Инструкция
                  </Badge>
                </div>
                <Button 
                  className="absolute bottom-4 right-4 bg-white text-gray-900 hover:bg-gray-100 opacity-0 group-hover:opacity-100 transition-all duration-300"
                  size="sm"
                >
                  <Icon name="Play" size={16} className="mr-2" />
                  Посмотреть
                </Button>
              </div>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Move" size={20} className="text-orange-500" />
                  Направляющие
                </CardTitle>
                <CardDescription>
                  Полный гайд по установке направляющих для ящиков
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <Icon name="Ruler" size={16} className="text-blue-500" />
                    Расчет размеров
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Drill" size={16} className="text-blue-500" />
                    Монтаж на корпус
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Target" size={16} className="text-blue-500" />
                    Настройка хода
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Handles Demo */}
            <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
              <div className="relative h-64 bg-gradient-to-br from-green-50 to-green-100">
                <img 
                  src="/img/96018d55-05c6-49d5-8b58-7bcfbe29a986.jpg"
                  alt="Установка ручек"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-10 transition-all duration-300"></div>
                <div className="absolute top-4 left-4">
                  <Badge className="bg-green-500 text-white">
                    <Icon name="Layers" size={14} className="mr-1" />
                    3D Модель
                  </Badge>
                </div>
                <Button 
                  className="absolute bottom-4 right-4 bg-white text-gray-900 hover:bg-gray-100 opacity-0 group-hover:opacity-100 transition-all duration-300"
                  size="sm"
                >
                  <Icon name="RotateCw" size={16} className="mr-2" />
                  Обращать
                </Button>
              </div>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Grip" size={20} className="text-green-500" />
                  Ручки и кнопки
                </CardTitle>
                <CardDescription>
                  3D-визуализация установки ручек на фасады
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <Icon name="Compass" size={16} className="text-purple-500" />
                    Разметка отверстий
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Wrench" size={16} className="text-purple-500" />
                    Сборка фурнитуры
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="CheckCircle2" size={16} className="text-purple-500" />
                    Проверка качества
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Interactive Tools Section */}
          <div className="bg-gradient-to-r from-gray-900 to-gray-700 rounded-2xl p-8 text-white">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold mb-4">Интерактивные инструменты</h3>
              <p className="text-gray-300 text-lg">Используйте наши калькуляторы для точного подбора фурнитуры</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="bg-white/10 backdrop-blur border-white/20 hover:bg-white/20 transition-all duration-300 hover-scale">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="Calculator" size={24} className="text-white" />
                  </div>
                  <h4 className="font-semibold mb-2">Калькулятор петель</h4>
                  <p className="text-sm text-gray-300 mb-4">Рассчитать количество петель для вашего шкафа</p>
                  <Button size="sm" className="bg-blue-500 hover:bg-blue-600">
                    Открыть
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="bg-white/10 backdrop-blur border-white/20 hover:bg-white/20 transition-all duration-300 hover-scale">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="Ruler" size={24} className="text-white" />
                  </div>
                  <h4 className="font-semibold mb-2">Подбор направляющих</h4>
                  <p className="text-sm text-gray-300 mb-4">Определить длину направляющих по размерам ящика</p>
                  <Button size="sm" className="bg-orange-500 hover:bg-orange-600">
                    Открыть
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="bg-white/10 backdrop-blur border-white/20 hover:bg-white/20 transition-all duration-300 hover-scale">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="Spacing" size={24} className="text-white" />
                  </div>
                  <h4 className="font-semibold mb-2">Разметка ручек</h4>
                  <p className="text-sm text-gray-300 mb-4">Оптимальное расположение ручек на фасадах</p>
                  <Button size="sm" className="bg-green-500 hover:bg-green-600">
                    Открыть
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="bg-white/10 backdrop-blur border-white/20 hover:bg-white/20 transition-all duration-300 hover-scale">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="Package" size={24} className="text-white" />
                  </div>
                  <h4 className="font-semibold mb-2">Комплект крепежа</h4>
                  <p className="text-sm text-gray-300 mb-4">Подбор необходимого крепежа для сборки мебели</p>
                  <Button size="sm" className="bg-purple-500 hover:bg-purple-600">
                    Открыть
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* AR Visualization */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
              <div className="max-w-3xl mx-auto">
                <div className="flex items-center justify-center mb-6">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mr-4">
                    <Icon name="Smartphone" size={32} className="text-white" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-2xl font-bold mb-2">AR-визуализация</h3>
                    <p className="text-blue-100">Посмотрите, как фурнитура будет выглядеть в вашей мебели</p>
                  </div>
                </div>
                <p className="text-lg mb-6">
                  Используйте камеру смартфона, чтобы увидеть фурнитуру 
                  на вашей мебели в реальном времени
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button className="bg-white text-blue-600 hover:bg-gray-100" size="lg">
                    <Icon name="Download" size={20} className="mr-2" />
                    Скачать приложение
                  </Button>
                  <Button variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600" size="lg">
                    <Icon name="QrCode" size={20} className="mr-2" />
                    QR-код
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Catalog */}
      <section id="catalog" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Каталог товаров</h2>
            <p className="text-xl text-gray-600">Широкий ассортимент качественной мебельной фурнитуры</p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filters Sidebar */}
            <div className="lg:w-1/4">
              <Card className="p-6 sticky top-4">
                <h3 className="text-lg font-semibold mb-4">Фильтры</h3>
                
                {/* Search */}
                <div className="mb-6">
                  <label className="block text-sm font-medium mb-2">Поиск</label>
                  <div className="relative">
                    <Icon name="Search" size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <Input
                      placeholder="Поиск товаров..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>

                {/* Category Filter */}
                <div className="mb-6">
                  <label className="block text-sm font-medium mb-2">Категория</label>
                  <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((cat) => (
                        <SelectItem key={cat.value} value={cat.value}>
                          {cat.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Price Range */}
                <div className="mb-6">
                  <label className="block text-sm font-medium mb-2">Цена, ₽</label>
                  <div className="flex gap-2">
                    <Input
                      type="number"
                      placeholder="От"
                      value={priceRange.min}
                      onChange={(e) => setPriceRange(prev => ({ ...prev, min: Number(e.target.value) }))}
                    />
                    <Input
                      type="number"
                      placeholder="До"
                      value={priceRange.max === 10000 ? '' : priceRange.max}
                      onChange={(e) => setPriceRange(prev => ({ ...prev, max: Number(e.target.value) || 10000 }))}
                    />
                  </div>
                </div>

                {/* Brand Filter */}
                <div className="mb-6">
                  <label className="block text-sm font-medium mb-2">Бренд</label>
                  <div className="space-y-2">
                    {brands.map((brand) => (
                      <div key={brand} className="flex items-center space-x-2">
                        <Checkbox
                          id={brand}
                          checked={selectedBrands.includes(brand)}
                          onCheckedChange={() => toggleBrand(brand)}
                        />
                        <label htmlFor={brand} className="text-sm cursor-pointer">
                          {brand}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Reset Filters */}
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('all');
                    setPriceRange({ min: 0, max: 10000 });
                    setSelectedBrands([]);
                  }}
                >
                  <Icon name="RotateCcw" size={16} className="mr-2" />
                  Сбросить фильтры
                </Button>
              </Card>
            </div>

            {/* Products Grid */}
            <div className="lg:w-3/4">
              {/* Sort and Results Info */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
                <p className="text-gray-600">
                  Найдено товаров: <span className="font-semibold">{filteredProducts.length}</span>
                </p>
                
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-600">Сортировать:</span>
                  <Select value={sortBy} onValueChange={setSortBy}>
                    <SelectTrigger className="w-48">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="popular">По популярности</SelectItem>
                      <SelectItem value="price-low">Цена: по возрастанию</SelectItem>
                      <SelectItem value="price-high">Цена: по убыванию</SelectItem>
                      <SelectItem value="name">По названию</SelectItem>
                      <SelectItem value="rating">По рейтингу</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Products Grid */}
              {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {filteredProducts.map((product) => (
                    <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-all duration-300 hover-scale group">
                      <div className="relative">
                        <img 
                          src={product.image} 
                          alt={product.title}
                          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        {product.popular && (
                          <Badge className="absolute top-4 left-4 bg-orange-500 text-white">
                            Популярное
                          </Badge>
                        )}
                        {!product.inStock && (
                          <Badge className="absolute top-4 right-4 bg-red-500 text-white">
                            Нет в наличии
                          </Badge>
                        )}
                        
                        {/* Quick Action Buttons */}
                        <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                          <Button size="sm" variant="secondary" className="w-10 h-10 p-0">
                            <Icon name="Eye" size={16} />
                          </Button>
                          <Button size="sm" variant="secondary" className="w-10 h-10 p-0">
                            <Icon name="Heart" size={16} />
                          </Button>
                        </div>
                      </div>
                      
                      <CardHeader className="pb-2">
                        <div className="flex items-start justify-between gap-2">
                          <CardTitle className="text-lg leading-tight">{product.title}</CardTitle>
                          <Badge variant="outline" className="text-xs">
                            {product.brand}
                          </Badge>
                        </div>
                        <CardDescription className="text-sm">{product.description}</CardDescription>
                        
                        {/* Rating */}
                        <div className="flex items-center gap-2 mt-2">
                          <div className="flex items-center">
                            {[...Array(5)].map((_, i) => (
                              <Icon 
                                key={i} 
                                name="Star" 
                                size={14} 
                                className={`${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                              />
                            ))}
                          </div>
                          <span className="text-sm text-gray-600">
                            {product.rating} ({product.reviews})
                          </span>
                        </div>
                      </CardHeader>
                      
                      <CardContent className="pt-0">
                        {/* Key Specs */}
                        <div className="text-xs text-gray-600 mb-3 space-y-1">
                          <div>Материал: {product.specs.material}</div>
                          {product.specs.finish && <div>Покрытие: {product.specs.finish}</div>}
                          {product.specs.size && <div>Размер: {product.specs.size}</div>}
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div>
                            <span className="text-2xl font-bold text-orange-500">{product.price} ₽</span>
                            <div className="text-xs text-gray-500">за штуку</div>
                          </div>
                          <Button 
                            onClick={addToCart}
                            disabled={!product.inStock}
                            className="bg-gray-900 hover:bg-gray-800 text-white disabled:bg-gray-300"
                          >
                            <Icon name="ShoppingCart" size={16} className="mr-2" />
                            В корзину
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <Icon name="Package" size={64} className="mx-auto text-gray-400 mb-4" />
                  <h3 className="text-xl font-semibold text-gray-600 mb-2">Товары не найдены</h3>
                  <p className="text-gray-500">Попробуйте изменить параметры поиска</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Delivery Section */}
      <section id="delivery" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Доставка по всей России</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Icon name="MapPin" size={16} className="text-orange-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">По Москве и МО</h3>
                    <p className="text-gray-600">Доставка в день заказа при заказе до 14:00</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Icon name="Truck" size={16} className="text-blue-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">По России</h3>
                    <p className="text-gray-600">Транспортными компаниями 1-3 рабочих дня</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Icon name="Package" size={16} className="text-green-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Бережная упаковка</h3>
                    <p className="text-gray-600">Гарантируем сохранность товара при транспортировке</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-orange-500 to-blue-500 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Бесплатная доставка</h3>
              <p className="text-lg mb-6">При заказе от 5000 рублей доставка по Москве бесплатно!</p>
              <Button className="bg-white text-gray-900 hover:bg-gray-100">
                Рассчитать стоимость доставки
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Company */}
      <section id="about" className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">О компании МебельФурнитура</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Более 10 лет мы специализируемся на поставке качественной мебельной фурнитуры. 
              Работаем напрямую с производителями, гарантируем подлинность и качество всех товаров.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-orange-400 mb-2">10+</div>
              <div className="text-gray-300">лет на рынке</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-400 mb-2">5000+</div>
              <div className="text-gray-300">довольных клиентов</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-400 mb-2">50+</div>
              <div className="text-gray-300">брендов в ассортименте</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contacts */}
      <section id="contacts" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Контакты</h2>
            <p className="text-xl text-gray-600">Свяжитесь с нами любым удобным способом</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-6 hover-scale">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Phone" size={32} className="text-orange-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Телефон</h3>
              <p className="text-gray-600 mb-4">+7 (495) 123-45-67</p>
              <Button variant="outline" className="border-orange-500 text-orange-500 hover:bg-orange-50">
                Позвонить
              </Button>
            </Card>
            
            <Card className="text-center p-6 hover-scale">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Mail" size={32} className="text-blue-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p className="text-gray-600 mb-4">info@mebelfurnitura.ru</p>
              <Button variant="outline" className="border-blue-500 text-blue-500 hover:bg-blue-50">
                Написать
              </Button>
            </Card>
            
            <Card className="text-center p-6 hover-scale">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="MapPin" size={32} className="text-green-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Адрес</h3>
              <p className="text-gray-600 mb-4">г. Москва, ул. Мебельная, д. 15</p>
              <Button variant="outline" className="border-green-500 text-green-500 hover:bg-green-50">
                На карте
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-blue-500 rounded-lg flex items-center justify-center">
                <Icon name="Wrench" size={20} className="text-white" />
              </div>
              <h3 className="text-xl font-bold">МебельФурнитура</h3>
            </div>
            <p className="text-gray-400 mb-6">Качественная фурнитура для вашей мебели</p>
            <div className="flex justify-center space-x-6 text-sm text-gray-400">
              <span>© 2024 МебельФурнитура</span>
              <span>•</span>
              <span>Все права защищены</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;