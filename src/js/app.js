export default function hitPoints(player) {
    if (player.health < 15) {
        return 'critical';
    } else if (player.health >= 15 && player.health <= 50) {
        return 'wounded';
    } else {
        return 'healthy';
    }
}
