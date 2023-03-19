CREATE TABLE `pins` (
	`id` serial AUTO_INCREMENT PRIMARY KEY NOT NULL,
	`created_at` timestamp NOT NULL DEFAULT (now()),
	`region_id` text NOT NULL,
	`region_name` text NOT NULL,
	`region_map_width` int NOT NULL,
	`region_map_height` int NOT NULL,
	`item_id` text NOT NULL,
	`item_name` text NOT NULL,
	`item_count` int NOT NULL,
	`item_image_path` text NOT NULL,
	`item_x_coordinate` int NOT NULL,
	`item_y_coordinate` int NOT NULL
);
