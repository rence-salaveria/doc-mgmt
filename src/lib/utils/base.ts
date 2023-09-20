import axios from 'axios';

export default axios.create({
	baseURL: 'https://docu-tracker.pockethost.io/api'
});
