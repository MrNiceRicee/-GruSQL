import { deleteUser } from './util/query/cancel';
import { updateUser } from './util/query/glowup';
import { createUser } from './util/query/posted';

import { getAllUsers, getUsers } from './util/query/yoink';

const main = async () => {
  try {
    const created = await createUser({ name: 'big swag' });
    console.table([created]);
    const received = await getUsers({ name: 'big swag' });
    console.table(received);
    const updated = await updateUser({
      name: 'big swag',
      newName: 'MEGA SWAG',
    });
    console.table([updated]);
    await deleteUser({ name: 'MEGA SWAG' });
    const everyone = await getAllUsers();
    console.table(everyone);
  } catch (err) {
    console.error(err);
  }
};

main();

export default main;
