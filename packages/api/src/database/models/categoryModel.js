import runQuery from '..';

class CategoryModel {
  static async getAll() {
    const categories = await runQuery('CALL catalog_get_categories()');
    return categories[0];
  }

  static async getByID(id) {
    const category = await runQuery('CALL catalog_get_category_details(?)', [id]);
    return category[0];
  }

  static async getProductcategories(id) {
    const categories = await runQuery('CALL catalog_get_categories_for_product(?)', [id]);
    return categories[0];
  }

  static async getDepartmentCategories(id) {
    const categories = await runQuery('CALL catalog_get_department_categories(?)', [id]);
    return categories[0];
  }
}

export default CategoryModel;
