// utils/uploadToCloudinary.js

/**
 * Uploads a blob (e.g. from canvas) to Cloudinary using unsigned upload.
 * @param {Blob} blob - Image blob to upload
 * @param {string} fileName - Optional public_id for the image
 * @returns {Promise<string>} - Public Cloudinary URL
 */
export const uploadToCloudinary = async (blob, fileName) => {
    const formData = new FormData()
    formData.append('file', blob)
    formData.append('upload_preset', 'your_upload_preset') // replace this
    formData.append('public_id', fileName)

    const response = await fetch('https://api.cloudinary.com/v1_1/your_cloud_name/image/upload', {
        method: 'POST',
        body: formData,
    })

    const data = await response.json()

    if (!response.ok) throw new Error(data.error?.message || 'Upload failed')
    return data.secure_url
}
