import hitPoints from '../app';

test.each([
    ['healthy', {name: 'Маг', health: 51}],
    ['wounded', {name: 'Маг', health: 43}],
    ['critical', {name: 'Маг', health: 12}],
])('testing hit points - %s', (status, player) => {
    const result = hitPoints(player);
    expect(result).toBe(status);
});
