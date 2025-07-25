import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [cartCount, setCartCount] = useState(0);

  const addToCart = () => {
    setCartCount(prev => prev + 1);
  };

  const categories = [
    {
      title: 'Петли и навесы',
      description: 'Качественные петли для мебели',
      image: '/img/06c5a24b-2d35-4a0c-91ad-adeb176ad464.jpg',
      price: 'от 250 ₽',
      popular: true
    },
    {
      title: 'Ручки и кнопки',
      description: 'Современные ручки для шкафов',
      image: '/img/22245ba0-893d-48c6-b3ce-301c8f9e259c.jpg',
      price: 'от 180 ₽',
      popular: false
    },
    {
      title: 'Крепеж и фурнитура',
      description: 'Винты, болты, направляющие',
      image: '/img/cd635416-d6d8-4eb1-a72b-ca6c161a1953.jpg',
      price: 'от 50 ₽',
      popular: true
    }
  ];

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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                <Icon name="Truck" size={32} className="text-green-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Быстрая доставка</h3>
              <p className="text-gray-600">Доставим заказ по всей России в течение 1-3 рабочих дней</p>
            </div>
          </div>
        </div>
      </section>

      {/* Catalog */}
      <section id="catalog" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Популярные категории</h2>
            <p className="text-xl text-gray-600">Выберите нужную категорию фурнитуры</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-all duration-300 hover-scale group">
                <div className="relative">
                  <img 
                    src={category.image} 
                    alt={category.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {category.popular && (
                    <Badge className="absolute top-4 left-4 bg-orange-500 text-white">
                      Популярное
                    </Badge>
                  )}
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{category.title}</CardTitle>
                  <CardDescription>{category.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-orange-500">{category.price}</span>
                    <Button 
                      onClick={addToCart}
                      className="bg-gray-900 hover:bg-gray-800 text-white"
                    >
                      <Icon name="Plus" size={16} className="mr-2" />
                      В корзину
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
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
              <div className="text-4xl font-bold text-green-400 mb-2">1000+</div>
              <div className="text-gray-300">товаров в каталоге</div>
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