export default {
  name: 'nutritionItem',
  title: 'Nutrition Item',
  type: 'object',
  fields: [
    {
      title: 'Value',
      name: 'value',
      type: 'number',
    },
    {
      title: 'Type',
      name: 'type',
      type: 'reference',
      to: [{type: 'nutrient'}],
    }
  ]
}