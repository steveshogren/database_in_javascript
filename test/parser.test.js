const parse = require('../src/parser');

test('basic select statement', () => {
    const query = 'select pants from laundry where id = 1;';
    const result = parse(query);
    // select
    expect(result.statement[0].variant).toBe('select');
    expect(result.statement[0].result[0].name).toBe('pants');
    expect(result.statement[0].result[0].variant).toBe('column');
    // from
    expect(result.statement[0].from.name).toBe('laundry');
    expect(result.statement[0].from.variant).toBe('table');
    // where
    // left
    expect(result.statement[0].where[0].left.name).toBe('id');
    expect(result.statement[0].where[0].left.variant).toBe('column');
    expect(result.statement[0].where[0].left.type).toBe('identifier');

    // right
    expect(result.statement[0].where[0].operation).toBe('=');
    expect(result.statement[0].where[0].right.value).toBe('1');
    expect(result.statement[0].where[0].right.variant).toBe('decimal');
    expect(result.statement[0].where[0].right.type).toBe('literal');
});
