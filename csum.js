export const csum = async (file, algorithm = 'SHA-256') =>
{
	if (file instanceof File)
	{
		const buffer = await file.arrayBuffer()
		const hash = await crypto.subtle.digest(algorithm, buffer)
		return Array.from(new Uint8Array(hash)).map(byte => byte.toString(16).padStart(2, '0')).join('')
	}
	else throw Error('File is not valid.')
}
