// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Documents
import product from './documents/product'
import ingredient from './documents/ingredient'
import vendor from './documents/vendor'
import certification from './documents/certification'
import classification from './documents/classification'
import nutrient from './documents/nutrient'
import award from './documents/award'

// Objects

import nutritionItem from './objects/nutritionItem'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'Food Sourcing',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // Objects
    //When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
    nutritionItem,
    // Documents
    product,
    ingredient,
    vendor,
    certification,
    classification,
    nutrient,
    award
  ])
})
