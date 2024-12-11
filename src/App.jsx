// src/App.jsx
import React, { useState } from 'react';
import { Column } from './components/Column';
import { Header } from './components/Header';
import { ErrorMessage } from './components/ErrorMessage';
import { CompanyPopup } from './components/CompanyPopup';
import { LoadingState } from './components/LoadingState';
import { PasswordModal } from './components/PasswordModal'; // Import the PasswordModal
import { fetchPriorityData } from './services/api';

function App() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedCompany, setSelectedCompany] = useState(null);
  const [showPasswordModal, setShowPasswordModal] = useState(false);

  const fetchData = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetchPriorityData();
      setData(response);
    } catch (err) {
      setError(err.message);
      console.error('Error fetching data:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleRefreshClick = () => {
    setShowPasswordModal(true);
  };

  const handlePasswordSubmit = () => {
    fetchData();
  };

  const handleCompanyClick = (company) => {
    setSelectedCompany(company);
  };

  const columns = [
    { title: "Ampoc 1", companies: data?.df_1?.priority_list || [] },
    { title: "Ampoc 2", companies: data?.df_2?.priority_list || [] },
    { title: "Ampoc 3", companies: data?.df_3?.priority_list || [] },
    { title: "Ampoc 4", companies: data?.df_4?.priority_list || [] },
    { title: "Ampoc 5", companies: data?.df_5?.priority_list || [] }
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-7xl mx-auto">
        <Header onRefresh={handleRefreshClick} isLoading={isLoading} />
        {error && <ErrorMessage message={error} />}
        {isLoading ? (
          <LoadingState />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {columns.map((column, index) => (
              <Column 
                key={index}
                title={column.title}
                companies={column.companies}
                onCompanyClick={handleCompanyClick}
              />
            ))}
          </div>
        )}
        {selectedCompany && (
          <CompanyPopup 
            company={selectedCompany} 
            onClose={() => setSelectedCompany(null)} 
          />
        )}
        {showPasswordModal && (
          <PasswordModal 
            onClose={() => setShowPasswordModal(false)} 
            onSubmit={handlePasswordSubmit} 
          />
        )}
      </div>
    </div>
  );
}

export default App;