import { Vector2 } from '../lib';

describe('Vector2', () => {
  describe('prototype.constructor()', () => {
    test('returns new vector with expected type', () => {
      const vector = new Vector2();

      expect(vector).toBeInstanceOf(Vector2);
      expect(vector).toBeInstanceOf(Float32Array);
    });

    test('returns new vector with default values', () => {
      const vector = new Vector2();

      expect(vector).toEqual(new Vector2(Vector2.DEFAULT));
    });
  });

  describe('prototype.approximates()', () => {
    test('returns true when vectors are approximately equal', () => {
      const vector1 = Vector2.of(0.0, 1.0);
      const vector2 = Vector2.of(0.0, 1.000001);

      expect(vector1.approximates(vector2)).toBe(true);
    });

    test('returns true when vectors are exactly equal', () => {
      const vector1 = Vector2.of(0.0, 1.0);
      const vector2 = Vector2.of(0.0, 1.0);

      expect(vector1.approximates(vector2)).toBe(true);
    });

    test('returns false when vectors are not equal', () => {
      const vector1 = Vector2.of(0.0, 1.0);
      const vector2 = Vector2.of(0.0, 2.0);

      expect(vector1.approximates(vector2)).toBe(false);
    });
  });

  describe('prototype.equals()', () => {
    test('returns true when vectors are exactly equal', () => {
      const vector1 = Vector2.of(1.0, 2.0);
      const vector2 = Vector2.of(1.0, 2.0);

      expect(vector1.equals(vector2)).toBe(true);
    });

    test('returns false when vectors are nearly equal', () => {
      const vector1 = Vector2.of(1.000001, 2.0);
      const vector2 = Vector2.of(1.000002, 2.0);

      expect(vector1.equals(vector2)).toBe(false);
    });

    test('returns false when vectors are not equal', () => {
      const vector1 = Vector2.of(3.0, 4.0);
      const vector2 = Vector2.of(1.0, 2.0);

      expect(vector1.equals(vector2)).toBe(false);
    });
  });

  describe('forEach()', () => {
    test('iterates over array', () => {
      const arr = new Float32Array([1.0, 2.0, 3.0, 4.0]);
      const indices = [];

      Vector2.forEach(arr, function (v, i) {
        indices.push(i);
      });

      expect(indices).toEqual([0, 1]);
    });

    test('permits manipulation of array', () => {
      const arr = new Float32Array([1.0, 2.0, 3.0, 4.0]);

      Vector2.forEach(arr, function (v) {
        v[0] = 0.0;
      });

      expect(arr).toEqual(new Float32Array([0.0, 2.0, 0.0, 4.0]));
    });
  });

  describe('keys()', () => {
    test('returns vector iterator', () => {
      const arr = new Float32Array([1.0, 2.0, 3.0]);
      const iterator = Vector2.keys(arr);

      expect(iterator.next).toBeInstanceOf(Function);
    });

    test('iterates over array as vector indices', () => {
      const arr = new Float32Array([1.0, 2.0, 3.0, 4.0]);
      const indices = [];

      for (const k of Vector2.keys(arr)) {
        indices.push(k);
      }

      expect(indices).toEqual([0, 1]);
    });
  });

  describe('of()', () => {
    test('returns new vector matching given values', () => {
      const vector = Vector2.of(1.0, 2.0);

      expect(vector).toEqual(new Vector2([1.0, 2.0]));
    });

    test('returns new default vector when not given values', () => {
      const vector = Vector2.of();

      expect(vector).toEqual(new Vector2(Vector2.DEFAULT));
    });
  });

  describe('values()', () => {
    test('returns vector iterator', () => {
      const arr = new Float32Array([1.0, 2.0]);
      const iterator = Vector2.values(arr);

      expect(iterator.next).toBeInstanceOf(Function);
    });

    test('iterates over array as vectors', () => {
      const arr = new Float32Array([1.0, 2.0, 3.0, 4.0]);
      const vectors = [];

      for (const v of Vector2.values(arr)) {
        vectors.push(new Vector2(v));
      }

      expect(vectors).toEqual([new Vector2([1.0, 2.0]), new Vector2([3.0, 4.0])]);
    });

    test('permits manipulation of array', () => {
      const arr = new Float32Array([1.0, 2.0, 3.0, 4.0]);

      for (const v of Vector2.values(arr)) {
        v[0] = 9.0;
      }

      expect(arr).toEqual(new Float32Array([9.0, 2.0, 9.0, 4.0]));
    });
  });
});
