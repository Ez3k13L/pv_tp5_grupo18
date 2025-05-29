import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Sistema de Alumnos
        </Typography>
        <Button color="inherit" component={Link} to="/">Inicio</Button>
        <Button color="inherit" component={Link} to="/alumnos">Lista</Button>
        <Button color="inherit" component={Link} to="/alumnos/nuevo">Nuevo</Button>
        <Button color="inherit" component={Link} to="/acerca">Acerca de</Button>
      </Toolbar>
    </AppBar>
  );
}
