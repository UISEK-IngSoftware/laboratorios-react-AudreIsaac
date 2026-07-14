import { Card, CardMedia, CardContent, CardActions, Typography, Button } from "@mui/material";
import "./PokemonCard.css";

const TYPE_LABELS = {
    A: 'Agua',
    F: 'Fuego',
    T: 'Tierra',
    P: 'Planta',
    E: 'Eléctrico',
    L: 'Lagartija',
};

export default function PokemonCard({ pokemon }) {
    const mediaUrl = import.meta.env.VITE_MEDIA_URL;
    pokemon.image = `${mediaUrl}/${pokemon.picture}`;

    return (
        <Card>
            <CardMedia
                component="img"
                image={pokemon.image}
                alt={pokemon.name}
                height={200}
            />
            <CardContent>
                <Typography variant="h6" component="div">
                    {pokemon.name}
                </Typography>
                <Typography variant="body" color="text.secondary">
                    {TYPE_LABELS[pokemon.type] || pokemon.type}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">
                    Ver Detalles
                </Button>
            </CardActions>
        </Card>
    );
}