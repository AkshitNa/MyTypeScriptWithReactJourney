class MathHelper {
  static PI: number = 3.14159;

  static square(n: number): number {
    return n * n;
  }
}

// ✅ Use without creating an object
console.log(MathHelper.PI); // Output: 3.14159
console.log(MathHelper.square(5)); // Output: 25

// ❌ This would be wrong:
// const helper = new MathHelper();
// console.log(helper.PI); // Error: PI is static
