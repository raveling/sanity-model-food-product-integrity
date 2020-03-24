export default {
  title: 'Nutrient',
  name: 'nutrient',
  type: 'document',
  fields: [
    {
      title: 'Name',
      name: 'name',
      type: 'string',
    },
    {
      title: 'Description',
      name: 'description',
      type: 'text',
    },
    {
      title: 'Type',
      name: 'type',
      type: 'string',
      options: {
        list: [
          {title: 'Protein', value: 'protein'},
          {title: 'Fat', value: 'fat'},
          {title: 'Sugar', value: 'sugar'},
          {title: 'Vitamin', value: 'vitamin'},
          {title: 'Mineral', value: 'mineral'}
        ]
      }
    },
    {
      title: 'Description Source',
      name: 'descriptionSource',
      type: 'url',
    },
    {
      title: 'Unit of Measure',
      name: 'unitOfMeasure',
      type: 'string',
      options: {
        list: [
          {title: 'Gram (g)', value: 'g'},
          {title: 'Milligram (mg)', value: 'mg'},
          {title: 'Microgram (µg)', value: 'µg'},
          {title: 'Kilojoule (kj)', value: 'kj'}
        ]
      }
    }
  ]
}