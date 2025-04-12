import { useState } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Регистрируем компоненты Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const ProductSearch = () => {
  const [productUrl, setProductUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [productData, setProductData] = useState(null);
  const [priceHistory, setPriceHistory] = useState([]);

  const handleSearch = async () => {
    if (!productUrl) {
      setError('Пожалуйста, введите ссылку на товар');
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      // Отправляем запрос к вашему backend API
      const response = await axios.post('/api/products/search', { url: productUrl });
      
      setProductData(response.data.product);
      setPriceHistory(response.data.priceHistory);
    } catch (err) {
      setError('Не удалось получить данные о товаре. Проверьте ссылку и попробуйте снова.');
      console.error('Error fetching product:', err);
    } finally {
      setIsLoading(false);
    }
  };

  // Подготовка данных для графика
  const chartData = {
    labels: priceHistory.map(item => new Date(item.date).toLocaleDateString()),
    datasets: [
      {
        label: 'Цена',
        data: priceHistory.map(item => item.price),
        borderColor: 'rgb(75, 192, 192)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        tension: 0.1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'История изменения цены',
      },
      tooltip: {
        callbacks: {
          label: (context) => {
            return `${context.dataset.label}: ${context.parsed.y} ₽`;
          }
        }
      }
    },
    scales: {
      y: {
        beginAtZero: false,
        ticks: {
          callback: (value) => `${value} ₽`
        }
      }
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-6">Поиск товара по ссылке</h1>
      
      <div className="flex gap-2 mb-6">
        <input
          type="text"
          value={productUrl}
          onChange={(e) => setProductUrl(e.target.value)}
          placeholder="Вставьте ссылку на товар (Wildberries, Ozon, AliExpress)"
          className="flex-grow p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        <button
          onClick={handleSearch}
          disabled={isLoading}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-blue-400"
        >
          {isLoading ? 'Поиск...' : 'Найти'}
        </button>
      </div>

      {error && (
        <div className="p-4 mb-6 text-red-700 bg-red-100 rounded-lg">
          {error}
        </div>
      )}

      {productData && (
        <div className="mt-6">
          <div className="flex flex-col md:flex-row gap-6 mb-8">
            <div className="w-full md:w-1/3">
              <img 
                src={productData.imageUrl} 
                alt={productData.name}
                className="w-full h-auto rounded-lg object-contain border border-gray-200"
              />
            </div>
            
            <div className="w-full md:w-2/3">
              <h2 className="text-xl font-bold mb-2">{productData.name}</h2>
              
              <div className="mb-4">
                <span className="text-3xl font-bold text-blue-600">
                  {productData.currentPrice} ₽
                </span>
                {productData.oldPrice && (
                  <span className="ml-2 text-lg text-gray-500 line-through">
                    {productData.oldPrice} ₽
                  </span>
                )}
              </div>
              
              <div className="flex items-center mb-4">
                <span className="bg-blue-100 text-blue-800 text-sm font-semibold px-2.5 py-0.5 rounded">
                  {productData.marketplace}
                </span>
                {productData.rating && (
                  <div className="ml-4 flex items-center">
                    <span className="text-yellow-500 mr-1">★</span>
                    <span>{productData.rating}</span>
                  </div>
                )}
              </div>
              
              <a 
                href={productData.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block mt-4 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
              >
                Перейти к товару
              </a>
            </div>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-4">Динамика цены</h3>
            <div className="h-64">
              <Line data={chartData} options={chartOptions} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductSearch;