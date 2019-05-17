import fetch from '@/config/fetch'

export const groupcity = () => fetch('/v1/cities', {
	type: 'group'
});
