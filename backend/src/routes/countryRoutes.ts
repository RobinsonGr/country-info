import { Router } from 'express';
import { getCountries, getCountryFlag, getCountryInfo, getCountryPopulation } from '../controllers/countryController';


const router = Router();

router.get('/', getCountries);
router.get('/:countryCode', getCountryInfo);
router.get('/population/:countryCode', getCountryPopulation);
router.get('/img/:countryCode', getCountryFlag);


export default router;
