seeds_for_every_environment
seeds_for_development

private

def seeds_for_every_environment
  seed_files = Dir.glob("#{Rails.root}/db/seeds/*.rb")
  seed_files.each do |seed_file|
    load(seed_file)
  end
end

def seeds_for_development
  return unless Rails.env.development?

  seed_files = Dir.glob("#{Rails.root}/db/seeds/development/*.rb")
  seed_files.each do |seed_file|
    load(seed_file)
  end
end
