import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Profile, Content } from './styles';

import logo from '~/assets/logo-purple.svg';

export default function header() {
  return (
    <Container>
      <Content>
        <nav>
          <Link to="/dashboard">
            <img src={logo} alt="gobarber" />
          </Link>
        </nav>
        <aside>
          <Profile>
            <div>
              <strong>Diego Fernandes</strong>
              <Link to="/profile">Meu perfil</Link>
            </div>
            <img
              src="https://api.adorable.io/avatars/50/abott@adorable.png"
              alt="avatar"
            />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
