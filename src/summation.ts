export default function happyMeal(...v: number[]) {
  return `Your number is ${ v.reduce((sum, v) => sum + v, 0) }`;
}
