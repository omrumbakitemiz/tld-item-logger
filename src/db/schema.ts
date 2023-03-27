import { int, serial, text, timestamp } from 'drizzle-orm/mysql-core/columns';
import { mysqlTable } from 'drizzle-orm/mysql-core/table';

export const pins = mysqlTable('pins', {
  id: serial('id').primaryKey(),
  createdAt: timestamp('created_at').notNull().default(new Date()),
  regionId: text('region_id').notNull(),
  regionName: text('region_name').notNull(),
  regionMapWidth: int('region_map_width').notNull(),
  regionMapHeight: int('region_map_height').notNull(),
  itemId: text('item_id').notNull(),
  itemName: text('item_name').notNull(),
  itemCount: int('item_count').notNull(),
  itemImagePath: text('item_image_path').notNull(),
  itemXCoordinate: int('item_x_coordinate').notNull(),
  itemYCoordinate: int('item_y_coordinate').notNull(),
});
