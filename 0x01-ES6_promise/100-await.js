import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  try {
    const [result1, result2] = await Promise
      .all([uploadPhoto(), createUser()]);
    return { photo: result1, user: result2 };
  } catch (error) {
    return { photo: null, user: null };
  }
}
