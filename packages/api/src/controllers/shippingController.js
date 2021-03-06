import { ShippingService } from '../services';
import { respond } from '../utilities';

/**
 * Handles all shipping related endpoints
 * @class
 */
class ShippingController {
  constructor() {
    this.ShippingService = new ShippingService();
    this.getAll = this.getAll.bind(this);
    this.getDetails = this.getDetails.bind(this);
  }

  /**
   * Handles the GET /shipping/regions endpoint
   * @param {Object} _
   * @param {Object} response
   */
  async getAll(_, response) {
    try {
      const regions = await this.ShippingService.getAll();
      respond(response, 'success', 200, 'shipping regions retrieved successfully', regions);
    } catch (error) {
      respond(response, 'error', 500, 'an error occurred', error.message);
    }
  }

  /**
   * Handles the GET /shipping/regions/:id endpoint
   * @param {Object} request
   * @param {Object} response
   */
  async getDetails(request, response) {
    try {
      const shippingId = request.params.id;
      const details = await this.ShippingService.getDetails(shippingId);

      if (!details.length) {
        respond(response, 'error', 404, `details not found for shipping with ID ${shippingId}`);
        return;
      }

      respond(response, 'success', 200, 'shipping details retrieved successfully', details);
    } catch (error) {
      respond(response, 'error', 500, 'an error occurred', error.message);
    }
  }
}

export default ShippingController;
