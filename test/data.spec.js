import { filterProducer} from '../src/data.js';
import data from './data/ghibli/ghibli.js';



describe('filterProducer', () => {
  it('is a function', () => {
    expect(typeof filterProducer).toBe('function');
  });

  it('returns `filterProducer filtra correctamente los productores`', () => {
    expect(filterProducer(data,selectProductor)).toBe(filterProducer);
  });
});


/*describe('anotherExample', () => {
  it('is a function', () => {
    expect(typeof anotherExample).toBe('function');
  });

  it('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  });
})
*/