import React, { useState } from 'react';
import './SingIn.css';
import { Link, useNavigate } from 'react-router-dom';
import { signIn } from '../../services/authService'; // Assure-toi que le chemin est correct
import backgroundImage from '../../assets/background.jpg';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!email || !password) {
      setError('Veuillez remplir tous les champs');
      return;
    }

    try {
      await signIn({ email, password }); // backend vérifie
      navigate('/product'); // redirection après succès
    } catch (err) {
      setError(err.message);
    }
  };

  return (
      <div
          className="signin-container"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
      >
        <div className="signin-card">
          <h2 className="signin-title">Connexion</h2>

          {error && <div className="error-message">{error}</div>}

          <form onSubmit={handleSubmit} className="signin-form">
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Entrez votre email"
                  autoComplete="username"
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Mot de passe</label>
              <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Entrez votre mot de passe"
                  autoComplete="current-password"
              />
            </div>

            <div className="remember-forgot">
              <label className="remember-me">
                <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                />
                Se souvenir de moi
              </label>

              <a href="/forgot-password" className="forgot-password">
                Mot de passe oublié ?
              </a>
            </div>

            <button type="submit" className="signin-button">
              Se connecter
            </button>
          </form>

          <div className="signup-link">
            Pas encore de compte ? <Link to="/SignUp">S'inscrire</Link>
          </div>

          <div className="social-login">
            <p>Ou connectez-vous avec :</p>
            <div className="social-icons">
              <button className="social-button google">
                <i className="fab fa-google"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
  );
};

export default SignIn;
