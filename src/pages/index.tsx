import { useState } from 'react';

type UserType = 'student' | 'recruiter' | 'admin';
type AuthMode = 'signup' | 'signin';

export default function Home() {
  const [selectedUserType, setSelectedUserType] = useState<UserType | null>(null);
  const [selectedAuthMode, setSelectedAuthMode] = useState<AuthMode>('signup');
  const [authForm, setAuthForm] = useState({
    name: '',
    email: '',
    collegeName: '',
    password: '',
    userType: '' as UserType
  });

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setAuthForm(prev => ({
      ...prev,
      [name]: value,
      userType: selectedUserType || prev.userType
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(`${selectedAuthMode} Data:`, authForm);
    // Implement actual signup/signin logic
  };

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#f0f2f5',
      position: 'relative'
    }}>
      <div style={{
        width: '100%',
        maxWidth: '400px',
        padding: '20px',
        backgroundColor: 'white',
        borderRadius: '8px',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
      }}>
        <h1 style={{
          textAlign: 'center',
          color: '#333',
          marginBottom: '20px'
        }}>
          Placement Platform
        </h1>
        
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          marginBottom: '20px'
        }}>
          {(['student', 'recruiter', 'admin'] as UserType[]).map(userType => (
            <button 
              key={userType}
              style={{
                margin: '0 10px',
                padding: '10px 15px',
                borderRadius: '4px',
                backgroundColor: selectedUserType === userType ? '#007bff' : '#6c757d',
                color: 'white',
                border: 'none',
                cursor: 'pointer'
              }}
              onClick={() => setSelectedUserType(userType)}
            >
              {userType.charAt(0).toUpperCase() + userType.slice(1)}
            </button>
          ))}
        </div>

        {selectedUserType && (
          <div style={{
            backgroundColor: '#f8f9fa',
            padding: '20px',
            borderRadius: '8px'
          }}>
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              marginBottom: '20px'
            }}>
              {(['signup', 'signin'] as AuthMode[]).map(mode => (
                <button
                  key={mode}
                  style={{
                    margin: '0 10px',
                    padding: '10px 15px',
                    borderRadius: '4px',
                    backgroundColor: selectedAuthMode === mode ? '#007bff' : '#6c757d',
                    color: 'white',
                    border: 'none',
                    cursor: 'pointer'
                  }}
                  onClick={() => setSelectedAuthMode(mode)}
                >
                  {mode.charAt(0).toUpperCase() + mode.slice(1)}
                </button>
              ))}
            </div>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              {selectedAuthMode === 'signup' && (
                <>
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    value={authForm.name}
                    onChange={handleFormChange}
                    required
                    style={{
                      padding: '10px',
                      borderRadius: '4px',
                      border: '1px solid #ced4da'
                    }}
                  />
                  <input
                    type="text"
                    name="collegeName"
                    placeholder="College Name"
                    value={authForm.collegeName}
                    onChange={handleFormChange}
                    required
                    style={{
                      padding: '10px',
                      borderRadius: '4px',
                      border: '1px solid #ced4da'
                    }}
                  />
                </>
              )}

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={authForm.email}
                onChange={handleFormChange}
                required
                style={{
                  padding: '10px',
                  borderRadius: '4px',
                  border: '1px solid #ced4da'
                }}
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={authForm.password}
                onChange={handleFormChange}
                required
                style={{
                  padding: '10px',
                  borderRadius: '4px',
                  border: '1px solid #ced4da'
                }}
              />
              
              <button 
                type="submit" 
                style={{
                  padding: '10px',
                  backgroundColor: '#007bff',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer'
                }}
              >
                {selectedAuthMode.charAt(0).toUpperCase() + selectedAuthMode.slice(1)} 
                {' '}as {selectedUserType.charAt(0).toUpperCase() + selectedUserType.slice(1)}
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}