import DeviceRepository from '../../models/device'

async function findAll(req, resp) {
    const devices = await DeviceRepository.findAll();
    resp.json(devices);
}


export default { findAll }
